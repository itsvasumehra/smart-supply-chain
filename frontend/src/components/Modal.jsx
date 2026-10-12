export default function Modal({ open, title, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700" aria-label="Close">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
