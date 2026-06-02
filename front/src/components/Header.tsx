import type { SiteConfig } from '../types'

interface Props {
  config: SiteConfig
}

export default function Header({ config }: Props) {
  return (
    <header className="relative px-5 pt-14 pb-12 text-center overflow-hidden" style={{ background: 'var(--bg-hero)' }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #c1440e 0px,
            #c1440e 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />
      <div className="relative z-10">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
          ◆ Pizzería Artesanal ◆
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-black leading-tight tracking-tight" style={{ color: 'var(--text-hero)' }}>
          {config.restaurantName}
        </h1>
        <div className="mt-1 w-16 h-0.5 mx-auto" style={{ background: 'var(--accent)' }} />
        <div className="mt-5 flex flex-col gap-1.5 text-sm" style={{ color: 'var(--text-hero-muted)' }}>
          {config.address && <span>{config.address}</span>}
          {config.openingHours && <span>{config.openingHours}</span>}
        </div>
      </div>
    </header>
  )
}
