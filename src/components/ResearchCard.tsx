import React from 'react'
import { Badge } from './Badge'
import { ExternalLink } from 'lucide-react'

export type ResearchCardT = {
  title: string
  one_liner: string
  image: string
  tags: string[]
  links?: { label: string; href: string }[]
}

export function ResearchCard({ item }: { item: ResearchCardT }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="aspect-[16/9] bg-slate-100">
        <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} className="w-full h-full object-contain p-3" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.one_liner}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map(t => <Badge key={t}>{t}</Badge>)}
        </div>
        {item.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {item.links.map(l => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm rounded-full border border-slate-200 bg-white px-3 py-1.5 hover:border-brand-300 hover:text-brand-700 transition"
              >
                {l.label} <ExternalLink size={16} className="text-slate-400" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
