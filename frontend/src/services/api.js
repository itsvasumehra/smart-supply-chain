// ONE shared Axios instance. Everyone imports this; nobody creates their own.
import axios from 'axios'
import { setupMocks } from '@/mocks'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api' })

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const isLoginCall = err.config?.url?.includes('/auth/login')
    // Expired / invalid token: clear it and go to the login page
    if (err.response?.status === 401 && !isLoginCall) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

if (import.meta.env.VITE_USE_MOCKS === 'true') setupMocks(api)

export default api
