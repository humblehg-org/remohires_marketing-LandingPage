import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js doesn't pick up
  // unrelated lockfiles higher up the filesystem.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
