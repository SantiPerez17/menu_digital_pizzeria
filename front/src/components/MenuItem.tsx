import type { MenuItem as MenuItemType } from '../types'

interface Props {
  item: MenuItemType
}

export default function MenuItem({ item }: Props) {
  return (
    <li
      className="flex justify-between items-start gap-4 py-3 border-b last:border-0"
      style={{ borderColor: 'var(--border-main)' }}
    >
      <div className="flex-1 min-w-0">
        <p className="font-display text-lg font-bold leading-snug" style={{ color: 'var(--text-main)' }}>
          {item.name}
        </p>
        {item.description && (
          <p className="mt-0.5 text-sm leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
            {item.description}
          </p>
        )}
        {item.ingredients && item.ingredients.length > 0 && (
          <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--text-light)' }}>
            {item.ingredients.join(' · ')}
          </p>
        )}
      </div>
      <span className="shrink-0 font-semibold tabular-nums text-base" style={{ color: 'var(--accent)' }}>
        ${item.price.toLocaleString('es-AR')}
      </span>
    </li>
  )
}
