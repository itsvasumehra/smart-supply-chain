export default function Input({ label, error, className = '', ...props }) {
  return (
    <label className="block text-sm">
      {label && <span className="block mb-1 font-medium text-slate-700">{label}</span>}
      <input
        className={`w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}
