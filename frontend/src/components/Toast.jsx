// Usage:  const toast = useToast();  toast('Saved!', 'success')   (types: success | error | info)
import { createContext, useCallback, useContext, useState } from 'react'

const ToastContext = createContext(() => {})
const colors = { success: 'bg-green-600', error: 'bg-red-600', info: 'bg-slate-700' }

export function ToastProvider({ children }) {
  const [items, setItems] = useState([])

  const show = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random()
    setItems((prev) => [...prev, { id, message, type }])
    setTimeout(() => setItems((prev) => prev.filter((t) => t.id !== id)), 3000)
  }, [])

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {items.map((t) => (
          <div key={t.id} className={`text-white text-sm px-4 py-2 rounded-lg shadow ${colors[t.type]}`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
