// Sidebar menu. OWNED BY MEMBER 1 - agree entries as a team, then leave it alone.
// roles: who can see the item (leave out = everyone)
export const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Inventory', to: '/inventory' },
  { label: 'Suppliers', to: '/suppliers' },
  { label: 'Procurement', to: '/procurement' },
  { label: 'Forecasts', to: '/forecasts' },
  { label: 'Alerts', to: '/alerts' },
  { label: 'Reports', to: '/reports' },
  { label: 'Users', to: '/users', roles: ['admin'] },
]
