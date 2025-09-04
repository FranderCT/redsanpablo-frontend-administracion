// utils/formatDate.ts
export function formatDate(
  value?: string | Date | null,
  options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' },
  locale = 'es-CR'
): string {
  if (!value) return '—';                                  // placeholder
  const d = typeof value === 'string' ? new Date(value) : value;
  // filtra fechas inválidas o "sentinelas" del backend (ajústalo si usas otra)
  if (isNaN(d.getTime())) return '—';
  if (d.getFullYear() <= 1900) return '—';
  return d.toLocaleDateString(locale, options);
}
