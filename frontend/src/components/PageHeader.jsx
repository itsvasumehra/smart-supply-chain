// Title row at the top of every page. 'actions' = buttons on the right.
export default function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      <div className="flex gap-2">{actions}</div>
    </div>
  )
}
