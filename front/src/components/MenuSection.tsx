import type { MenuCategory } from '../types'
import MenuItem from './MenuItem'

interface Props {
  category: MenuCategory
}

export default function MenuSection({ category }: Props) {
  if (category.items.length === 0) return null

  return (
    <section className="px-5 pt-8 pb-2">
      <div className="flex items-center gap-3 mb-5">
        <span style={{ color: 'var(--accent)' }} className="text-lg">◆</span>
        <h2 className="font-display text-xl font-bold tracking-wide uppercase" style={{ color: 'var(--text-main)' }}>
          {category.name}
        </h2>
        <div className="flex-1 h-px" style={{ background: 'var(--border-main)' }} />
      </div>
      <ul style={{ borderColor: 'var(--border-main)' }}>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </section>
  )
}
