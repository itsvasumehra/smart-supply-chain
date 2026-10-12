// columns: [{ key, label, render?: (row) => node }]   rows: array of objects with an 'id' or 'productId'
export default function Table({ columns, rows = [], emptyText = 'No data' }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-4 py-3 font-semibold">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td className="px-4 py-6 text-slate-400" colSpan={columns.length}>
                {emptyText}
              </td>
            </tr>
          )}
          {rows.map((row, i) => (
            <tr key={row.id || row.productId || i} className="border-t border-slate-100">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3">
                  {c.render ? c.render(row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
