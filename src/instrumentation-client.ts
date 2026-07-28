import posthog from "posthog-js";

// RemoHires PostHog project (org "RemoHires", project id 531331, US cloud).
// The token is a public write-only key — hardcoded like the GTM container id
// in layout.tsx, so the deploy needs no extra env configuration.
posthog.init("phc_mX4dMmEmHbV6VuiBQErnk9bTSuRx3TnNrqRjpeZ8F4Tk", {
  api_host: "https://us.i.posthog.com",
  defaults: "2025-05-24",
});
