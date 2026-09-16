import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js doesn't pick up
  // unrelated lockfiles higher up the filesystem.
  turbopack: {
    root: __dirname,
  },
  images: {
    // /virtual-assistant's workspace screenshot is hosted here so it can go
    // through next/image (responsive sizes + modern formats) instead of a
    // raw <img>.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/qrnjdv9jd/**",
      },
    ],
  },
};

export default nextConfig;
