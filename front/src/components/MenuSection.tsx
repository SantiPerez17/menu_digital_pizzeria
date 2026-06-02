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
        <span className="text-[#c1440e] text-lg">◆</span>
        <h2 className="font-display text-xl font-bold text-stone-900 tracking-wide uppercase">
          {category.name}
        </h2>
        <div className="flex-1 h-px bg-stone-200" />
      </div>
      <ul className="divide-y divide-stone-100">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </section>
  )
}
