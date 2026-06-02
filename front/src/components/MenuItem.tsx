import type { MenuItem as MenuItemType } from '../types'

interface Props {
  item: MenuItemType
}

export default function MenuItem({ item }: Props) {
  return (
    <li className="flex justify-between items-start gap-4 py-3">
      <div className="flex-1 min-w-0">
        <p className="font-display text-lg font-bold text-stone-900 leading-snug">
          {item.name}
        </p>
        {item.description && (
          <p className="mt-0.5 text-sm text-stone-500 leading-relaxed italic">
            {item.description}
          </p>
        )}
        {item.ingredients && item.ingredients.length > 0 && (
          <p className="mt-1.5 text-xs text-stone-400 leading-relaxed">
            {item.ingredients.join(' · ')}
          </p>
        )}
      </div>
      <span className="shrink-0 font-semibold text-[#c1440e] tabular-nums text-base">
        ${item.price.toLocaleString('es-AR')}
      </span>
    </li>
  )
}
