"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";

type VslVideoProps = {
  /** Video file, e.g. "/cleaning/cleaning-explainer-v2.mp4". Leave empty
      while the video is not ready: the box then shows only the poster and
      the play button (no autoplay, nothing happens on click). */
  src?: string;
  poster: string;
  title: string;
};

/* The hero video box shared by the landing pages (.vsl in lp.css).
   idle: poster + big play button (reduced motion, autoplay blocked, or no video yet)
   pending: muted autoplay requested, poster still showing
   autoplay: muted loop running, "Tap for sound" pill showing
   playing: started with sound by the visitor, native controls */
export function VslVideo({ src, poster, title }: VslVideoProps) {
  const hasVideo = Boolean(src);
  const [videoMode, setVideoMode] = useState<"idle" | "pending" | "autoplay" | "playing">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const vslRef = useRef<HTMLDivElement>(null);
  const videoModeRef = useRef(videoMode);

  function changeVideoMode(mode: typeof videoMode) {
    videoModeRef.current = mode;
    setVideoMode(mode);
  }

  // Muted autoplay while the video is in view (browsers only allow autoplay
  // muted), paused while it is scrolled away. Skipped under reduced motion,
  // where the click-to-play poster stays. If the browser still blocks it
  // (e.g. iOS Low Power Mode), it falls back to click-to-play.
  useEffect(() => {
    if (!hasVideo) return;
    const box = vslRef.current;
    const video = videoRef.current;
    if (!box || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    const setMode = (mode: typeof videoModeRef.current) => {
      videoModeRef.current = mode;
      setVideoMode(mode);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        const mode = videoModeRef.current;
        if (mode === "playing") {
          io.disconnect();
          return;
        }
        if (entry.isIntersecting) {
          if (mode === "idle") setMode("pending");
          video.muted = true;
          video.loop = true;
          video
            .play()
            .then(() => {
              if (videoModeRef.current === "pending") setMode("autoplay");
            })
            .catch(() => {
              if (videoModeRef.current === "pending") setMode("idle");
            });
        } else {
          video.pause();
        }
      },
      // threshold 0: start as soon as any part is on screen (on page load the
      // hero video is often less than half visible on laptops), and pause
      // only once it is completely out of view.
      { threshold: 0 },
    );
    io.observe(box);
    return () => io.disconnect();
  }, [hasVideo]);

  // Both the big play button (idle) and the "Tap for sound" pill (autoplay)
  // land here: play from 0:00 with sound, once, with native controls. The
  // click counts as the user gesture an unmuted play() needs.
  function playWithSound() {
    const video = videoRef.current;
    if (!hasVideo || !video || videoModeRef.current === "playing") return;
    video.muted = false;
    video.loop = false;
    video.currentTime = 0;
    changeVideoMode("playing");
    video.play().catch(() => {
      // Playback was blocked; the native controls are showing, so the
      // visitor can still start it themselves.
    });
  }

  function loadVideo() {
    if (videoModeRef.current !== "idle") return;
    playWithSound();
  }

  // The play button / sound pill disappear once playback starts, so hand
  // keyboard focus to the video (focusable now that it has controls).
  useEffect(() => {
    if (videoMode === "playing") videoRef.current?.focus();
  }, [videoMode]);

  function onVslKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    // Only the idle poster acts as a button; otherwise keys belong to the
    // sound pill or the native video controls.
    if (videoModeRef.current !== "idle") return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      loadVideo();
    }
  }

  const isButton = hasVideo && videoMode === "idle";

  return (
    <div
      className="vsl"
      id="vsl"
      ref={vslRef}
      role={isButton ? "button" : undefined}
      tabIndex={isButton ? 0 : undefined}
      aria-label={isButton ? "Play video" : undefined}
      onClick={loadVideo}
      onKeyDown={onVslKeyDown}
      style={isButton ? undefined : { cursor: "default" }}
    >
      <video
        ref={videoRef}
        src={src || undefined}
        poster={poster}
        preload="metadata"
        playsInline
        controls={videoMode === "playing"}
        title={title}
      />
      {videoMode === "idle" && <span className="vplay" aria-hidden="true"><span className="tri"></span></span>}
      {videoMode === "autoplay" && (
        <button type="button" className="vsound" onClick={playWithSound}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
          Tap for sound
        </button>
      )}
    </div>
  );
}
