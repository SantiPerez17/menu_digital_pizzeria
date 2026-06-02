interface Props {
  phoneNumber: string
}

export default function CallButton({ phoneNumber }: Props) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 px-5 py-3 border-t backdrop-blur-sm"
      style={{ background: 'color-mix(in srgb, var(--bg-hero) 92%, transparent)', borderColor: 'var(--border-main)' }}
    >
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Llamar al restaurante para hacer un pedido"
        className="flex items-center justify-center gap-2 max-w-sm mx-auto w-full py-4 rounded-xl text-white font-semibold text-base tracking-wide shadow-lg transition-colors active:opacity-90"
        style={{ background: 'var(--accent)' }}
      >
        📞 Llamar para pedir
      </a>
    </div>
  )
}
