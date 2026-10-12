// Colour tag. Use for stock level, order status, alert severity.
const colors = {
  ok: 'bg-green-100 text-green-700',
  low: 'bg-orange-100 text-orange-700',
  warning: 'bg-orange-100 text-orange-700',
  critical: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
}

export default function StatusTag({ status, label }) {
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[status] || 'bg-slate-100 text-slate-700'}`}>
      {label || status}
    </span>
  )
}
