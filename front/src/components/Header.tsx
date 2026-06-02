import type { SiteConfig } from '../types'

interface Props {
  config: SiteConfig
}

export default function Header({ config }: Props) {
  return (
    <header className="px-5 pt-12 pb-8 border-b-2 border-stone-900">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c1440e] mb-3">
        Pizzería Artesanal
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-black text-stone-900 leading-tight tracking-tight">
        {config.restaurantName}
      </h1>
      <div className="mt-4 flex flex-col gap-1 text-sm text-stone-500 font-medium">
        {config.address && (
          <span className="flex items-center gap-1.5">
            <span className="text-[#c1440e]">◆</span>
            {config.address}
          </span>
        )}
        {config.openingHours && (
          <span className="flex items-center gap-1.5">
            <span className="text-[#c1440e]">◆</span>
            {config.openingHours}
          </span>
        )}
      </div>
    </header>
  )
}
