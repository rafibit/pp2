export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })
}

export function formatRange(start: string, end?: string) {
  if (!end) return `${formatDate(start)} – Present`
  return `${formatDate(start)} – ${formatDate(end)}`
}
