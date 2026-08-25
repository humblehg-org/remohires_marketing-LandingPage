"use client";

import dynamic from "next/dynamic";

// Server Components (page.tsx) dynamically importing a Client Component do not
// get real code-splitting in this Next.js version — the split has to originate
// from inside a Client Component boundary, hence this wrapper.
export const InteractiveFeatures = dynamic(() =>
  import("./interactive-features").then((mod) => mod.InteractiveFeatures),
);
