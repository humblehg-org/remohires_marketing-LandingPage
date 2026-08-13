import type { Metadata } from "next";
import "./ai-developer.css";
import { TopbarTyper } from "@/components/ai-developer/topbar-typer";
import { ScrollSpy } from "@/components/ai-developer/scroll-spy";
import { MatchForm } from "@/components/ai-developer/match-form";

const SPY_IDS = ["build", "why-now", "cost", "how-it-works", "lead-form-section"];

export const metadata: Metadata = {
  title: "Build AI Products From $300/Week | RemoHires",
  description:
    "Build AI agents, internal tools, prototypes, and AI-powered products from $300/week with affordable AI-capable developers matched by RemoHires.",
};

const buildItems = [
  {
    icon: "🤖",
    title: "AI agents",
    body: "Create AI agents for customer support, research, operations, lead handling, or internal productivity.",
  },
  {
    icon: "🛠️",
    title: "Internal AI tools",
    body: "Build dashboards, admin panels, reporting tools, and AI-assisted systems designed around your team’s workflow.",
  },
  {
    icon: "🚀",
    title: "MVPs and prototypes",
    body: "Move from concept to a testable first version without hiring a full engineering department.",
  },
  {
    icon: "💬",
    title: "AI assistants",
    body: "Create AI assistants for customers, employees, sales, operations, or knowledge workflows.",
  },
  {
    icon: "🔌",
    title: "API integrations",
    body: "Connect models, databases, business systems, and third-party tools into one working product flow.",
  },
  {
    icon: "📈",
    title: "AI marketing systems",
    body: "Build AI-supported systems for content production, lead research, campaign operations, and reporting.",
  },
];

const howItWorks = [
  {
    icon: "1",
    title: "Share the project",
    body: "Tell us whether you are building an AI agent, MVP, internal tool, chatbot, dashboard, or product feature.",
  },
  {
    icon: "2",
    title: "Define the role",
    body: "We help clarify the skills needed, from AI development to full-stack implementation, integrations, automation, or product support.",
  },
  {
    icon: "3",
    title: "Get matched",
    body: "RemoHires supports the matching and employment setup so you can focus on building the product.",
  },
];

export default function AiDeveloperPage() {
  return (
    <div className="page">
      <ScrollSpy ids={SPY_IDS} />

      <div className="topbar">
        <TopbarTyper text="Launch AI products, agents, and internal tools with affordable technical talent." />
        <span className="topbar-cursor" aria-hidden="true" />
      </div>

      <header className="nav" aria-label="Main navigation">
        <a href="#" aria-label="RemoHires">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo" src="/logo-remohires-color.svg" alt="RemoHires" />
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#build">What you can build</a>
          <a href="#why-now">Why this works</a>
          <a href="#cost">Cost</a>
          <a className="nav-cta" href="#lead-form">
            Start building
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> AI development talent
              </div>
              <h1>Build AI Products From $300/Week</h1>
              <p className="hero-lead">
                Get matched with AI-capable developers who can help you build agents, internal
                tools, prototypes, and AI-powered software without starting with a full US
                engineering team.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#lead-form">
                  Start your AI build
                </a>
                <a className="button button-secondary" href="#build">
                  Explore use cases
                </a>
              </div>

              <div className="hero-proof" aria-label="Offer highlights">
                <div className="proof-card">
                  <strong>Starting from $300/week</strong>
                  <span>Starting talent option</span>
                </div>
                <div className="proof-card">
                  <strong>Start lean</strong>
                  <span>Build before scaling</span>
                </div>
                <div className="proof-card">
                  <strong>AI agents</strong>
                  <span>Products, tools, workflows</span>
                </div>
              </div>
            </div>

            <aside className="hero-visual" aria-label="AI build offer summary">
              <div className="visual-card">
                <h2>Start with one AI-capable builder.</h2>
                <div className="visual-price">
                  <strong>$300</strong>
                  <span>/ week starting option</span>
                </div>
                <div className="visual-list">
                  <div className="visual-item">
                    <span className="check">✓</span>
                    <span>
                      <b>AI agents</b> for support, research, operations, and customer workflows.
                    </span>
                  </div>
                  <div className="visual-item">
                    <span className="check">✓</span>
                    <span>
                      <b>Internal tools</b> like dashboards, admin panels, and reporting systems.
                    </span>
                  </div>
                  <div className="visual-item">
                    <span className="check">✓</span>
                    <span>
                      <b>MVPs and prototypes</b> to validate the idea before hiring a full team.
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="build">
          <div className="container">
            <div className="section-header">
              <div className="kicker">AI build support</div>
              <h2>From AI idea to working product.</h2>
              <p className="section-copy">
                Tools and agents are only useful when someone can design, build, test, and improve
                them. RemoHires helps you find technical talent who can move the work from idea to
                execution.
              </p>
            </div>

            <div className="build-grid">
              {buildItems.map((item) => (
                <article className="build-card" key={item.title}>
                  <div className="build-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-now">
          <div className="container split">
            <div className="quote-panel">
              <p>AI lowered the barrier to building. Execution is still the advantage.</p>
              <span>The right talent can help you move faster without committing to a full US team.</span>
            </div>

            <div>
              <div className="kicker">Why this works</div>
              <h2>Start with the role you need now.</h2>
              <p className="section-copy">
                You do not need to hire a full engineering department to validate an AI idea.
                Start with one AI-capable developer, prove the concept, then expand only when the
                project earns it.
              </p>

              <ul className="simple-list spaced">
                <li>
                  <span className="check">✓</span>
                  <span>Start with one developer instead of committing to a full US engineering team.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Build agents, prototypes, internal tools, and AI-powered product features.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Use custom recruitment to match talent to your product, stack, timeline, and budget.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Validate the idea before taking on a large engineering budget.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="offer" id="cost">
          <div className="container">
            <div className="section-header">
              <div className="kicker">Cost advantage</div>
              <h2>AI development help from a leaner cost base.</h2>
              <p className="section-copy">
                RemoHires connects you with AI-capable technical talent so you can build, test,
                and iterate without starting with a full US hiring plan.
              </p>
            </div>

            <div className="offer-box">
              <div className="offer-card">
                <strong>Starting from $300/week</strong>
                <span>A lean starting point for early AI build support, subject to role scope and final talent match.</span>
              </div>

              <div className="offer-card">
                <strong>Start lean</strong>
                <span>Build the first version, learn from the market, then decide whether to add more technical support.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works">
          <div className="container">
            <div className="section-header">
              <div className="kicker">How it works</div>
              <h2>Share the project. We help define the right talent.</h2>
            </div>

            <div className="build-grid">
              {howItWorks.map((step) => (
                <article className="build-card" key={step.title}>
                  <div className="build-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lead-section" id="lead-form-section">
          <div className="container lead-grid">
            <div className="lead-copy-card">
              <div className="kicker">Start the match</div>
              <h2>Start your AI build.</h2>
              <p>
                Keep it simple. Share the AI product, agent, internal tool, or prototype you want
                to create. We&rsquo;ll help identify the right AI-capable talent for the first
                build.
              </p>

              <ul className="simple-list">
                <li>
                  <span className="check">✓</span>
                  <span>Good for founders, operators, and teams testing an AI idea.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Start with one builder instead of committing to a full engineering team.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Use the call to clarify scope, role, timeline, and budget.</span>
                </li>
              </ul>
            </div>

            <MatchForm subject="New RemoHires AI Developer Landing Page Lead" />
          </div>
        </section>

        <section className="footer-cta">
          <div className="container">
            <div className="cta-panel">
              <div>
                <h2>Ready to build the first version?</h2>
                <p>Tell us what you want to create. We&rsquo;ll help identify the right AI-capable talent to move the project forward.</p>
              </div>
              <a className="button button-primary" href="#lead-form">
                Start from $300/week
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>© 2026 RemoHires. All rights reserved.</div>
          <div className="footer-links">
            <a href="/privacypolicy">Privacy Policy</a>
            <a href="/termsofservice">Terms of Service</a>
            <a href="#lead-form">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
