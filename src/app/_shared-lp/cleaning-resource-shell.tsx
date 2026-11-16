import type { ReactNode } from "react";
import Link from "next/link";
import { FooterContact } from "@/app/_shared-lp/footer-contact";
import "@/app/_shared-lp/lp.css";
import "@/app/_shared-lp/resources.css";

/* Page frame for the cleaning lead-magnet pages under /resources: the same
   fonts, white navbar, logos, and footer as /cleaning. The navbar's section
   links and every "Book a Discovery Call" point back to /cleaning. Pages that
   use this also set format-detection metadata (see footer-contact.tsx). */
export function CleaningResourceShell({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline&display=swap" rel="stylesheet" />

      <div className="rh-lp">
        <header>
          <nav className="nav">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link className="logo" href="/cleaning"><img src="/cleaning/logo-header.png" alt="RemoHires" /></Link>
            <div className="nav-links">
              <Link href="/cleaning#what">What You Get</Link>
              <Link href="/cleaning#roles">Roles</Link>
              <Link href="/cleaning#how">How It Works</Link>
              <Link href="/cleaning#faq">FAQ</Link>
            </div>
            <Link className="btn btn-primary" href="/cleaning">Book a Discovery Call</Link>
          </nav>
        </header>

        {children}

        <footer>
          <div className="wrap">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="logo"><img src="/cleaning/logo-footer.png" alt="RemoHires" /></div>
              <p className="fmeta">RemoHires finds, screens, and employs full-time remote staff for small businesses, and handles the hiring and payroll for you. Results and timelines vary by role and candidate availability.</p>
              <FooterContact />
            </div>
            <div className="fbottom">
              <div className="fcopy">&copy; 2026 RemoHires.com LLC. All rights reserved.</div>
              <div className="flegal">
                <Link href="/cleaning/privacy">Privacy Policy</Link>
                <Link href="/cleaning/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
