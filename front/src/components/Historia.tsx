import { useState } from 'react'

export default function Historia() {
  const [open, setOpen] = useState(false)

  return (
    <section className="px-5 py-8 bg-stone-900 text-stone-100">
      <div className="max-w-sm mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c1440e] mb-3">
          Desde 1987
        </p>
        <h2 className="font-display text-2xl font-bold mb-4">
          Nuestra Historia
        </h2>

        {open && (
          <div className="text-sm text-stone-400 leading-relaxed text-left space-y-3 mb-5">
            <p>
              Todo comenzó en un pequeño horno de barro en el barrio de Palermo. Don Vittorio
              Rossi llegó desde Nápoles con una sola maleta y la receta familiar que su madre
              le enseñó de niño: masa fermentada 48 horas, salsa de tomate San Marzano y
              mozzarella fior di latte.
            </p>
            <p>
              Desde entonces, tres generaciones de la familia Rossi mantienen viva esa
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
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-stone-600 text-sm font-medium text-stone-300 hover:border-[#c1440e] hover:text-[#c1440e] transition-colors"
        >
          {open ? 'Cerrar' : 'Leer nuestra historia'}
          <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
        </button>
      </div>
    </section>
  )
}
