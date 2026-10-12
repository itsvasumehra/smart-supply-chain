import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import ProtectedRoute from '@/routes/ProtectedRoute'
import { appRoutes } from '@/routes'
import LoginPage from '@/features/auth/LoginPage'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        {appRoutes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={r.roles ? <ProtectedRoute roles={r.roles}>{r.element}</ProtectedRoute> : r.element}
          />
        ))}
        <Route path="*" element={<div className="p-6">Page not found</div>} />
      </Route>
    </Routes>
  )
}
