// import React from 'react'
// import { cn } from '../lib/utils'

// export function Section({
//   id,
//   title,
//   subtitle,
//   children,
//   className,
// }: {
//   id?: string
//   title: string
//   subtitle?: string
//   children: React.ReactNode
//   className?: string
// }) {
//   return (
//     <section id={id} className={cn("scroll-mt-24 py-10", className)}>
//       <div className="flex flex-col gap-2">
//         <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
//         {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
//       </div>
//       <div className="mt-5">{children}</div>
//     </section>
//   )
// }

import React from 'react'
import { cn } from '../lib/utils'
import {
  User,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  Mail,
  Award,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  about: User,
  research: BookOpen,      // your "Recent Publications" section uses id="research"
  experience: Briefcase,
  education: GraduationCap,
  skills: Sparkles,
  contact: Mail,
  awards: Award,
}

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
  const Icon = id ? iconMap[id] : undefined

  return (
    <section id={id} className={cn("scroll-mt-24 py-10", className)}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {Icon ? (
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
              <Icon size={18} className="text-brand-700" />
            </span>
          ) : null}
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
        </div>

        {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
      </div>

      <div className="mt-5">{children}</div>
    </section>
  )
}
