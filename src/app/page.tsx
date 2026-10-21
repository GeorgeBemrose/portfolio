import Image from "next/image";
import Link from "next/link";

import workExperience from "./data/work_experience.json";
import education from "./data/education.json";
import projects from "./data/projects.json";

const contacts = [
  { name: "Email", href: "mailto:georgebemrose@gmail.com" },
  { name: "GitHub", href: "https://github.com/GeorgeBemrose" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/georgebemrose/" },
];

const tools = ["TypeScript", "React", "Next.js", "Python", "Java", "PostgreSQL", "Kafka", "AWS", "Docker", "Git", "Linux"];

type Entry = { start: string; end: string; organization: string; role: string; description?: string };

function Ledger({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="mt-16">
      <h2 className="font-condensed text-2xl font-semibold">{title}</h2>
      <ol className="mt-4 border-t-2 border-ink">
        {entries.map((e) => (
          <li
            key={`${e.role}-${e.start}`}
            className="grid gap-x-8 gap-y-1 border-b border-rule py-4 sm:grid-cols-[10rem_1fr]"
          >
            <p className="text-sm tabular-nums text-muted sm:pt-0.5">
              {e.start} – {e.end}
            </p>
            <div>
              <p className="font-medium">
                {e.role}
                {e.organization && <span className="font-normal text-muted">, {e.organization}</span>}
              </p>
              {e.description && <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">{e.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <main className="mx-auto max-w-5xl border-l-4 border-double border-margin px-6 py-12 sm:ml-[max(1rem,calc(50%-32rem))] sm:px-12 sm:py-20">
        <header className="flex flex-col-reverse gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-condensed text-5xl font-semibold tracking-tight underline decoration-double decoration-2 underline-offset-[0.2em] sm:text-7xl">
              George Bemrose
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed">
              Founding engineer at Artifact AI, building AI bookkeeping for accountants. Before that I qualified as a
              chartered accountant at EY and built full-stack software at CGI.
            </p>
            <p className="mt-4 text-muted">London</p>
            <nav className="mt-6 flex gap-6 font-medium">
              {contacts.map((c) => (
                <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className="underline decoration-rule decoration-2 underline-offset-4 hover:decoration-margin">
                  {c.name}
                </a>
              ))}
            </nav>
          </div>
          <Image src="/Headshot.png" alt="George Bemrose" width={180} height={180} priority className="h-28 w-28 sm:h-44 sm:w-44" />
        </header>

        <Ledger title="Experience" entries={workExperience} />
        <Ledger title="Education" entries={education} />

        <section className="mt-16">
          <h2 className="font-condensed text-2xl font-semibold">Side projects</h2>
          <div className="mt-4 grid gap-10 border-t-2 border-ink pt-6 md:grid-cols-2">
            {projects.map((p) => {
              const external = !p.link.startsWith("/");
              return (
                <article key={p.title}>
                  <Link
                    href={p.link}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group block"
                  >
                    <Image src={p.imageUrl} alt={`${p.title} screenshot`} width={800} height={500} className="aspect-[16/10] w-full border border-rule object-cover object-top" />
                    <h3 className="mt-4 font-condensed text-xl font-semibold underline decoration-rule decoration-2 underline-offset-4 group-hover:decoration-margin">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                  <p className="mt-2 text-sm">{p.techStack.join(", ")}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-condensed text-2xl font-semibold">Tools I work with</h2>
          <p className="mt-4 border-t-2 border-ink pt-4 leading-relaxed">{tools.join(", ")}</p>
        </section>
      </main>
    </div>
  );
}
