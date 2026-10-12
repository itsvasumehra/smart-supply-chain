import PlaceholderPage from '@/components/PlaceholderPage'

// Member 1 owns this folder.
export const usersReportsRoutes = [
  { path: '/reports', element: <PlaceholderPage title="Reports" owner="Member 1" /> },
  { path: '/users', roles: ['admin'], element: <PlaceholderPage title="Users and Roles" owner="Member 1" /> },
]
