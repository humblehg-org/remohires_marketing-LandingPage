"use client";

import { useRef, useState, type FormEvent } from "react";
import { IconCalendarCheck, IconCheck } from "./icons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function useCaptureForm() {
  const [invalid, setInvalid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = emailRef.current?.value.trim() ?? "";
    if (!EMAIL_RE.test(value)) {
      setInvalid(true);
      emailRef.current?.focus();
      return;
    }
    setInvalid(false);
    setSubmitted(true);
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  function handleInput() {
    if (invalid) setInvalid(false);
  }

  return { invalid, submitted, emailRef, doneRef, handleSubmit, handleInput };
}

function DoneMessage({
  doneRef,
  hidden,
}: {
  doneRef: React.RefObject<HTMLDivElement | null>;
  hidden: boolean;
}) {
  return (
    <div className="cdone" role="status" hidden={hidden} tabIndex={-1} ref={doneRef}>
      <span className="ic">
        <IconCheck />
      </span>
      <div>
        <b>Thanks &mdash; we&rsquo;ll be in touch within one business day.</b>
        <span>Watch for an email from remohires.com.</span>
      </div>
    </div>
  );
}

export function HeroCaptureForm() {
  const { invalid, submitted, emailRef, doneRef, handleSubmit, handleInput } =
    useCaptureForm();

  return (
    <form
      className={`capture${invalid ? " invalid" : ""}`}
      noValidate
      onSubmit={handleSubmit}
      onInput={handleInput}
    >
      <div className="capture-fields" hidden={submitted}>
        <div className="capture-live">
          <label className="sr" htmlFor="he">
            Work email
          </label>
          <input
            className="cin"
            id="he"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@yourcompany.com"
            required
            aria-describedby="he-note"
            aria-invalid={invalid || undefined}
            ref={emailRef}
          />
          <button className="btn primary glow" type="submit">
            <span className="ic">
              <IconCalendarCheck />
            </span>
            Book my call
          </button>
        </div>
        <p className="cerr" role="alert">
          Enter a valid work email so we can reach you.
        </p>
        <p className="cnote" id="he-note">
          A 15-minute call to learn your shop. One reply, within one business
          day.
        </p>
      </div>
      <DoneMessage doneRef={doneRef} hidden={!submitted} />
    </form>
  );
}

export function FinalCaptureForm() {
  const { invalid, submitted, emailRef, doneRef, handleSubmit, handleInput } =
    useCaptureForm();

  return (
    <form
      className={`capture final-capture${invalid ? " invalid" : ""}`}
      noValidate
      onSubmit={handleSubmit}
      onInput={handleInput}
    >
      <div className="capture-fields" hidden={submitted}>
        <div className="cgrid">
          <div className="cfield">
            <label className="clabel" htmlFor="fe-n">
              Name <span style={{ opacity: 0.7 }}>(optional)</span>
            </label>
            <input
              className="cin2"
              id="fe-n"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
            />
          </div>
          <div className="cfield">
            <label className="clabel" htmlFor="fe-e">
              Work email
            </label>
            <input
              className="cin2"
              id="fe-e"
              type="email"
              name="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@yourcompany.com"
              required
              ref={emailRef}
            />
          </div>
          <div className="cfield full">
            <label className="clabel" htmlFor="fe-c">
              Company <span style={{ opacity: 0.7 }}>(optional)</span>
            </label>
            <input
              className="cin2"
              id="fe-c"
              type="text"
              name="company"
              autoComplete="organization"
              placeholder="Your company"
            />
          </div>
        </div>
        <button className="btn ctabtn glow" type="submit">
          <span className="ic">
            <IconCalendarCheck />
          </span>
          Book my free call
        </button>
        <p className="cerr" role="alert">
          Enter a valid work email so we can reach you.
        </p>
        <p className="cnote">Cancel anytime. Money back your first month.</p>
      </div>
      <DoneMessage doneRef={doneRef} hidden={!submitted} />
    </form>
  );
}
