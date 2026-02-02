import React from 'react'
import { cn } from '../lib/utils'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs text-slate-700",
        className
      )}
    >
      {children}
    </span>
  )
}
