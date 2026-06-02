import { useEffect, useState } from 'react'
import { client, menuQuery, siteConfigQuery } from './lib/sanity'
import type { SiteConfig, MenuCategory } from './types'
import Header from './components/Header'
import MenuSection from './components/MenuSection'
import CallButton from './components/CallButton'
import Historia from './components/Historia'
import Footer from './components/Footer'

export default function App() {
  const [config, setConfig] = useState<SiteConfig | null>(null)
  const [menu, setMenu] = useState<MenuCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    Promise.all([
      client.fetch<SiteConfig>(siteConfigQuery),
      client.fetch<MenuCategory[]>(menuQuery),
    ])
      .then(([siteConfig, menuData]) => {
        setConfig(siteConfig)
        setMenu(menuData)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-stone-400 text-sm animate-pulse">Cargando menú...</p>
      </div>
    )
  }

  if (error || !config) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center px-5">
          <p className="text-stone-500 text-sm text-center">
            No se pudo cargar el menú. Intentá de nuevo más tarde.
          </p>
        </div>
        <CallButton phoneNumber={import.meta.env.VITE_PHONE_NUMBER} />
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto pb-28 min-h-screen shadow-2xl shadow-black/50">
      <Header config={config} />
      <Historia />
      <main className="bg-[#fffdf9]">
        {menu.map((category) => (
          <MenuSection key={category.name} category={category} />
        ))}
      </main>
      <Footer />
      <CallButton phoneNumber={config.phoneNumber} />
    </div>
  )
}
