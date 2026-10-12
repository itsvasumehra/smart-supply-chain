import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function LoginPage() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (user) return <Navigate to="/" replace />

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.error || 'Could not log in. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white rounded-xl shadow p-6 space-y-4">
        <h1 className="text-xl font-bold text-slate-800">Smart Supply Chain</h1>
        <p className="text-sm text-slate-500">Sign in to continue</p>
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={busy} className="w-full">
          {busy ? 'Signing in...' : 'Sign in'}
        </Button>
        {import.meta.env.VITE_USE_MOCKS === 'true' && (
          <p className="text-xs text-slate-400">Demo: admin@demo.com or manager@demo.com / password</p>
        )}
      </form>
    </div>
  )
}
