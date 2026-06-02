interface Props {
  phoneNumber: string
}

export default function CallButton({ phoneNumber }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-5 py-3 bg-stone-900/95 backdrop-blur-sm border-t border-stone-700">
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Llamar al restaurante para hacer un pedido"
        className="flex items-center justify-center gap-2 max-w-sm mx-auto w-full py-4 rounded-xl bg-[#c1440e] text-white font-semibold text-base tracking-wide shadow-lg active:bg-[#a33a0c] transition-colors"
      >
        📞 Llamar para pedir
      </a>
    </div>
  )
}
