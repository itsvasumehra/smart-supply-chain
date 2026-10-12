export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-4 ${className}`}>
      {title && <h3 className="font-semibold text-slate-700 mb-3">{title}</h3>}
      {children}
    </div>
  )
}
