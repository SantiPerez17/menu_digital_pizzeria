import type { SiteConfig } from '../types'

interface Props {
  config: SiteConfig
}

export default function Header({ config }: Props) {
  return (
    <header className="relative bg-stone-900 px-5 pt-14 pb-12 text-center overflow-hidden">
      {/* patrón de fondo */}
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
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c1440e] mb-4">
          ◆ Pizzería Artesanal ◆
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-black text-stone-50 leading-tight tracking-tight">
          {config.restaurantName}
        </h1>
        <div className="mt-1 w-16 h-0.5 bg-[#c1440e] mx-auto" />
        <div className="mt-5 flex flex-col gap-1.5 text-sm text-stone-400">
          {config.address && <span>{config.address}</span>}
          {config.openingHours && <span>{config.openingHours}</span>}
        </div>
      </div>
    </header>
  )
}
