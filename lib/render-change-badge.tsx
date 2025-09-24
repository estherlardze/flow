import { JSX } from "react";

export function renderChangeBadge(change?: string): JSX.Element | null {
  if (!change) return null;

  const raw = change.replace('%', '');
  const num = parseFloat(raw.replace('+', '')) || 0;
  const isNegative = change.trim().startsWith('-');
  const sign = isNegative ? '-' : '+';
  const badgeClasses = isNegative
    ? 'bg-black/5 text-red-600'
    : 'bg-black/5 text-green-600';

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeClasses}`}>
      {sign}{Math.abs(num)}%
    </span>
  );
}
