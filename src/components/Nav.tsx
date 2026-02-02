import React from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Publications' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="#" className="font-semibold tracking-tight text-slate-900">Profile</a>
        <nav className="hidden md:flex items-center gap-4 text-sm text-slate-700">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-brand-700 transition">{l.label}</a>
          ))}
        </nav>
        <a
          className="text-sm rounded-full border border-slate-300 bg-white px-3 py-1.5 hover:border-brand-400 hover:text-brand-700 transition"
          href="assets/Rafiq-ul-Islam-CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </div>
  )
}
