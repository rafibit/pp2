import React from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { Badge } from './components/Badge'
import { profile } from './data/profile'
import { ResearchCard } from './components/ResearchCard'
import { formatRange } from './lib/utils'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />

      <main className="mx-auto max-w-6xl px-4 pb-24">
        {/* <Section
          id="about"
          title="Research interests"
          subtitle="My current focus areas (edit in src/data/profile.ts)."
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {profile.research_interests.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        </Section> */}
        
       <Section
          id="research"
          title="Recent Publications"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.research_cards.map((r) => (
              <ResearchCard key={r.title} item={r} />
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Full list on Google Scholar:{' '}
            <a
              className="underline hover:text-brand-700"
              href={profile.links.find(l => l.label === 'Google Scholar')?.href ?? '#'}
              target="_blank"
              rel="noreferrer"
            >
              {profile.links.find(l => l.label === 'Google Scholar')?.href ?? ''}
            </a>
          </p>
        </Section> 

        {/* ✅ Experience section (card style like old portal) */}
        <Section id="experience" title="Experience" >
          <div className="flex flex-col gap-4">
            {profile.experience.map((e) => (
              <div
                key={`${e.role}-${e.org}-${e.start}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {e.role} · {e.org}
                    </h3>
                    <p className="text-sm text-slate-600">{e.where}</p>
                  </div>

                  <div className="text-sm text-slate-600">
                    {formatRange(e.start, e.end)}
                  </div>
                </div>

                {e.tags?.length ? (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {e.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                ) : null}

                {e.bullets?.length ? (
                  <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-2">
                    {e.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>
<Section id="education" title="Education" subtitle="Academic background.">
  <div className="flex flex-col gap-4">
    {profile.education.map((ed) => (
      <div
        key={`${ed.degree}-${ed.org}-${ed.start}`}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{ed.degree}</h3>
            <p className="text-sm text-slate-600">{ed.org} · {ed.where}</p>
          </div>
          <div className="text-sm text-slate-600">{formatRange(ed.start, ed.end)}</div>
        </div>
      </div>
    ))}
  </div>
</Section>
  {/* ✅ Skills section (grouped like old portal) */}
        <Section id="skills" title="Skills" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.skills.map((g) => (
              <div
                key={g.group}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-900">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Badge key={it}>{it}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
                {/* Awards Section (at the end) */}
        <Section id="awards" title="Awards" subtitle="Selected recognitions.">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-4">
              {profile.awards.map((a) => (
                <li
                  key={`${a.title}-${a.date}`}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-slate-700"
                >
                  <div>
                    <span className="font-semibold text-slate-900">{a.title}</span>
                    <span className="text-slate-600"> · {a.org}</span>
                  </div>
                  <div className="text-sm text-slate-500">
                    {new Date(a.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              Email:{' '}
              <a className="underline hover:text-brand-700" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p className="text-slate-700 mt-2">
              Phone:{' '}
              <a className="underline hover:text-brand-700" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </p>
            <p className="text-slate-700 mt-2">Location: {profile.location}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm hover:border-brand-300 hover:text-brand-700 transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="assets/Rafiq-ul-Islam-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm hover:border-brand-300 hover:text-brand-700 transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </Section>
        
        <footer className="pt-10 text-xs text-slate-500">
          Created by: <code className="text-slate-700">Rafiq Ul Islam</code>.
        </footer>
      </main>
    </div>
  )
}
