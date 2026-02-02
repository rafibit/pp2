import React from 'react'
import { cn } from '../lib/utils'

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10", className)}>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
        {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  )
}
