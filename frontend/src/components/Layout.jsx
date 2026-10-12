import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { navItems } from '@/routes/navItems'
import NotificationBell from '@/features/alerts/NotificationBell'
import Button from './Button'

export default function Layout() {
  const { user, logout } = useAuth()
  const items = navItems.filter((i) => !i.roles || i.roles.includes(user.role))

  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-56 bg-slate-800 text-white flex flex-col">
        <div className="px-5 py-4 font-bold text-lg">SmartSupply</div>
        <nav className="flex-1 px-2 space-y-1">
          {items.map((i) => (
            <NavLink
              key={i.to}
              to={i.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-teal-600' : 'hover:bg-slate-700'}`
              }
            >
              {i.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-end gap-4">
          <NotificationBell />
          <span className="text-sm text-slate-600">
            {user.name} <span className="text-slate-400">({user.role})</span>
          </span>
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
