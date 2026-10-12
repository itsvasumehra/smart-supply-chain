const styles = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700',
  secondary: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
