import type { ReactNode } from "react";
import Link from "next/link";
import { LegalToc } from "./legal-toc";
import "./cleaning.css";
import "./legal.css";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  meta: { label: string; value: ReactNode }[];
  sections: LegalSection[];
};

/* Shared shell for /cleaning/terms and /cleaning/privacy: the /cleaning
   navbar and footer, a header block, and the numbered sections with an
   "In this page" list (sticky sidebar on desktop, above the content on
   mobile). */
export function LegalPage({ eyebrow, title, intro, meta, sections }: LegalPageProps) {
  return (
    <>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline&display=swap" rel="stylesheet" />

      <div className="cleaning">
        <header>
          <nav className="nav">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link className="logo" href="/cleaning"><img src="/cleaning/logo-header.png" alt="RemoHires" /></Link>
          </nav>
        </header>

        <main className="legal">
          <div className="legal-hero">
            <div className="wrap">
              <div className="eyebrow">{eyebrow}</div>
              <h1>{title}</h1>
              <p className="legal-intro">{intro}</p>
              <dl className="legal-meta">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="wrap legal-layout">
            <LegalToc items={sections.map(({ id, title }) => ({ id, title }))} />

            <div className="legal-content">
              {sections.map((s, i) => (
                <article key={s.id} id={s.id} className="legal-section">
                  <h2>
                    <span className="legal-num">{i + 1}</span>
                    <span>{s.title}</span>
                  </h2>
                  <div className="legal-text">{s.body}</div>
                </article>
              ))}
            </div>
          </div>
        </main>

        <footer>
          <div className="wrap">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="logo"><img src="/cleaning/logo-footer.png" alt="RemoHires" /></div>
              <p className="fmeta">RemoHires finds, screens, and employs full-time remote staff for small businesses, and handles the hiring and payroll for you. Results and timelines vary by role and candidate availability.</p>
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
