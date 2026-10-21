import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { ThemeToggle, CopyEmail } from "./components/HomeControls";
import "./home.css";

const EMAIL = "georgebemrose@gmail.com";

const works: { id: string; title: string; meta: string; href?: string; text: string; tags: string[]; visual: ReactNode }[] = [
  {
    id: "w1",
    title: "Artifact AI",
    meta: "Founding Engineer, 2025 to now",
    text: "Founding engineer at an a16z-backed AI startup for the accounting industry. I build AI-powered bookkeeping features end to end, design how accountants review and approve AI-generated work, own two-way accounting platform integrations, and architect the platform and data layer.",
    tags: ["Document workflows", "Review queues", "Close sign-off", "Integrations"],
    visual: (
      <div className="queue">
        <div><b>Bill: Northwind Paper</b><i>£412.80</i><span className="pill ok">Posted</span></div>
        <div><b>Receipt: Taxi</b><i>£23.50</i><span className="pill warn">Review</span></div>
        <div><b>Bank line: Stripe payout</b><i>£1,980.00</i><span className="pill ok">Matched</span></div>
      </div>
    ),
  },
  {
    id: "w2",
    title: "CGI",
    meta: "Software Engineer, 2024 to 2025",
    text: "Full-stack work on Java services and React front ends, with Kafka event streams, Elasticsearch, WebSockets and PostgreSQL on AWS.",
    tags: ["Java", "React", "Kafka", "AWS", "Docker"],
    visual: (
      <div className="flow"><span>REST API</span><hr /><span className="hot">Kafka</span><hr /><span>Elasticsearch</span></div>
    ),
  },
  {
    id: "w3",
    title: "Reg Lookup",
    meta: "reglookup.info",
    href: "https://reglookup.info",
    text: "Type a UK registration and see the car's full MOT history from the DVLA API, with mileage charted across every test.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    visual: (
      <div className="plate-wrap">
        <div className="plate">AB12 CDE</div>
        <svg viewBox="0 0 176 48" role="presentation">
          <line x1="0" y1="47" x2="176" y2="47" />
          <polyline points="4,44 30,38 56,31 82,25 108,19 134,15 160,10 172,8" />
          <circle cx="172" cy="8" r="3.5" />
        </svg>
      </div>
    ),
  },
  {
    id: "w4",
    title: "Sudoku",
    meta: "Play it here",
    href: "/sudoku",
    text: "A playable Sudoku with a pausable timer, a number pad and a check when you submit the grid.",
    tags: ["React", "Next.js", "TypeScript"],
    visual: (
      <div className="sudoku">
        <span className="given">4</span><span></span><span className="given">9</span>
        <span>7</span><span className="sel">2</span><span className="given">3</span>
        <span className="given">8</span><span></span><span className="given">1</span>
      </div>
    ),
  },
];

const tools = ["TypeScript", "React", "Next.js", "Python", "Java", "PostgreSQL", "Kafka", "AWS", "Docker"];

export default function Home() {
  return (
    <>
      <header className="wrap top">
        <a className="mark" href="#top" aria-label="George Bemrose, back to top">GB</a>
        <nav aria-label="Sections">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="top">
        <section className="wrap hero" aria-label="Introduction">
          <div className="sheet">
            <span className="scan" aria-hidden="true"></span>
            <div className="copy">
              <h1>George Bemrose</h1>
              <p className="lede">
                <strong style={{ "--i": 0 } as CSSProperties}>Founding engineer</strong> at{" "}
                <strong style={{ "--i": 1 } as CSSProperties}>Artifact AI</strong>, an a16z-backed AI startup for the
                accounting industry. I moved into software after qualifying as a{" "}
                <strong style={{ "--i": 2 } as CSSProperties}>chartered accountant</strong> at EY.
              </p>
            </div>
            <div className="portrait">
              <Image src="/Headshot.png" alt="George Bemrose" width={280} height={280} priority />
            </div>
          </div>
        </section>

        <section className="wrap section" id="about" aria-labelledby="about-h">
          <div className="about">
            <div className="about-text">
              <h2 id="about-h">About</h2>
              <p>
                I spent four years in audit at EY and qualified as a <strong>chartered accountant (ACA)</strong> before
                moving into software. I now work at the point where accounting rules meet product design: the numbers
                have to be exactly right, and the screen still has to feel calm.
              </p>
              <p>
                Before Artifact I was a full-stack engineer at CGI, working across Java services, React front ends and
                event streaming. I studied Physics at Bristol and came top in every computing module.
              </p>
              <ol className="path" aria-label="Career so far">
                <li><time>2025</time><span>Founding Engineer, Artifact AI</span></li>
                <li><time>2024</time><span>Software Engineer, CGI</span></li>
                <li><time>2020</time><span>Assurance, EY (ACA qualified 2023)</span></li>
                <li><time>2016</time><span>Physics BSc, University of Bristol</span></li>
              </ol>
            </div>

            <div className="demo">
              <fieldset>
                <legend>Explain my job to…</legend>
                <div className="seg">
                  <input type="radio" name="explain" id="t-acc" defaultChecked /><label htmlFor="t-acc">An accountant</label>
                  <input type="radio" name="explain" id="t-eng" /><label htmlFor="t-eng">An engineer</label>
                  <input type="radio" name="explain" id="t-friend" /><label htmlFor="t-friend">A friend</label>
                </div>
              </fieldset>
              <div className="panels" aria-live="polite">
                <div className="panel p-acc"><p>I design how you review and approve AI-generated work: document workflows, review queues and close sign-off. Our two-way integrations then turn it into accurate journals in your client&apos;s ledger.</p></div>
                <div className="panel p-eng"><p>I build AI-powered bookkeeping features end to end, from problem discovery with accountants through design, build and production. I own two-way accounting platform integrations and architect the platform and data layer for reliable financial data at scale.</p></div>
                <div className="panel p-friend"><p>Accountants spend hours typing receipts into software. We built AI that does the typing. I build the part where a person checks its homework.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap section" id="work" aria-labelledby="work-h">
          <div className="head">
            <h2 id="work-h">Work</h2>
            <p>Hover or tab to a card for details.</p>
          </div>
          <div className="grid">
            {works.map((w) => {
              const inner = (
                <>
                  <div className="visual" aria-hidden="true">{w.visual}</div>
                  <div className="reveal">
                    <p>{w.text}</p>
                    <ul className="tags">{w.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                  <div className="caption"><h3 id={w.id}>{w.title}</h3><span>{w.meta}</span></div>
                </>
              );
              if (!w.href) return <article key={w.id} className="card" tabIndex={0} aria-labelledby={w.id}>{inner}</article>;
              const external = w.href.startsWith("http");
              return (
                <a key={w.id} className="card" href={w.href} aria-labelledby={w.id}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
                  {inner}
                </a>
              );
            })}
          </div>
        </section>

        <section className="tools" aria-labelledby="tools-h">
          <div className="wrap">
            <h2 id="tools-h">Tools I use</h2>
            <ul>{tools.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>
      </main>

      <footer className="wrap" id="contact">
        <div className="contact">
          <h2>Building something for accountants? Let&apos;s talk.</h2>
          <p>I&apos;m happy to hear about hard problems in finance software, or to compare notes on moving from audit into engineering.</p>
          <div className="email">
            <code>{EMAIL}</code>
            <CopyEmail email={EMAIL} />
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/georgebemrose/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/GeorgeBemrose" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>
        <p className="fine">George Bemrose, London.</p>
      </footer>
    </>
  );
}
