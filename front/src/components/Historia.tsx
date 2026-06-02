import { useState } from 'react'

export default function Historia() {
  const [open, setOpen] = useState(false)

  return (
    <section className="px-5 py-8" style={{ background: 'var(--bg-hero)' }}>
      <div className="max-w-sm mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Desde 1987
        </p>
        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-hero)' }}>
          Nuestra Historia
        </h2>

        {open && (
          <div className="text-sm leading-relaxed text-left space-y-3 mb-5" style={{ color: 'var(--text-hero-muted)' }}>
            <p>
              Todo comenzó en un pequeño horno de barro en el barrio de Palermo. Enzo Ferrara
              llegó desde Nápoles con una sola maleta y la receta familiar que su madre
              le enseñó de niño: masa fermentada 48 horas, salsa de tomate San Marzano y
              mozzarella fior di latte.
            </p>
            <p>
              Desde entonces, tres generaciones de la familia Ferrara mantienen viva esa
              tradición. Cada pizza se trabaja a mano, se hornea en horno a leña y se sirve
              con el mismo amor de siempre.
            </p>
            <p>
              Hoy, casi 40 años después, seguimos siendo el mismo lugar de siempre: una
              pizzería de barrio con alma italiana.
            </p>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-medium transition-colors"
          style={{ borderColor: 'var(--border-main)', color: 'var(--text-hero-muted)' }}
        >
          {open ? 'Cerrar' : 'Leer nuestra historia'}
          <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
        </button>
      </div>
    </section>
  )
}
