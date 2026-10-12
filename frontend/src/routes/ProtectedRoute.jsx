import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import Loader from '@/components/Loader'

// roles is optional. Example: <ProtectedRoute roles={['admin']}>
export default function ProtectedRoute({ roles, children }) {
  const { user, loading } = useAuth()
  if (loading) return <Loader />
  if (!user) return <Navigate to="/login" replace />
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />
  return children
}
