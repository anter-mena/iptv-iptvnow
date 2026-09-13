import { cn } from "@/lib/utils"
import type { Currency } from "@/lib/pricing"

// Inline SVG flags: emoji flags don't render on Windows (they show "CA", "US" letters).

function starPoints(cx: number, cy: number, outer: number) {
  const inner = outer * 0.382
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? outer : inner
    const angle = -Math.PI / 2 + (i * Math.PI) / 5
    return `${(cx + radius * Math.cos(angle)).toFixed(3)},${(cy + radius * Math.sin(angle)).toFixed(3)}`
  }).join(" ")
}

// EU flag geometry: 27×18, twelve stars on a circle of radius 6 around the centre.
const euStars = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * Math.PI) / 6
  return starPoints(13.5 + 6 * Math.sin(angle), 9 - 6 * Math.cos(angle), 1)
})

// US flag geometry: 190×100, 13 stripes, 9 rows of stars in the canton.
const usStripeHeight = 100 / 13
const usStars = Array.from({ length: 9 }, (_, row) =>
  Array.from({ length: row % 2 === 0 ? 6 : 5 }, (_, col) => ({
    x: (76 / 12) * (2 * col + (row % 2 === 0 ? 1 : 2)),
    y: (usStripeHeight * 7 / 10) * (row + 1),
  })),
).flat()

function CanadaFlag() {
  return (
    <svg viewBox="0 0 9600 4800" className="h-full w-auto" aria-hidden="true">
      <path fill="#d52b1e" d="M0 0h9600v4800H0z" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
      />
    </svg>
  )
}

function UsFlag() {
  return (
    <svg viewBox="0 0 190 100" className="h-full w-auto" aria-hidden="true">
      <path fill="#fff" d="M0 0h190v100H0z" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={usStripeHeight * i * 2} width="190" height={usStripeHeight} fill="#b22234" />
      ))}
      <rect width="76" height={usStripeHeight * 7} fill="#3c3b6e" />
      {usStars.map(({ x, y }, i) => (
        <circle key={i} cx={x} cy={y} r="1.9" fill="#fff" />
      ))}
    </svg>
  )
}

function EuFlag() {
  return (
    <svg viewBox="0 0 27 18" className="h-full w-auto" aria-hidden="true">
      <path fill="#039" d="M0 0h27v18H0z" />
      {euStars.map((points, i) => (
        <polygon key={i} points={points} fill="#fc0" />
      ))}
    </svg>
  )
}

const flags: Record<Currency, () => React.JSX.Element> = {
  CAD: CanadaFlag,
  USD: UsFlag,
  EUR: EuFlag,
}

export function CurrencyFlag({ currency, className }: { currency: Currency; className?: string }) {
  const Flag = flags[currency]
  return (
    <span className={cn("inline-flex h-3 shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10", className)}>
      <Flag />
    </span>
  )
}
