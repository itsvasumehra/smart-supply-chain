// options: [{ value, label }]
export default function Select({ label, options = [], className = '', ...props }) {
  return (
    <label className="block text-sm">
      {label && <span className="block mb-1 font-medium text-slate-700">{label}</span>}
      <select
        className={`w-full rounded-lg border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}
