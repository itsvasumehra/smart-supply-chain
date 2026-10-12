// Fake backend for development. Turn on with VITE_USE_MOCKS=true in .env
// Login with: admin@demo.com / manager@demo.com / procurement@demo.com  (password: password)
import MockAdapter from 'axios-mock-adapter'
import { users, suppliers, inventory, alerts, dashboardSummary } from './data'

export function setupMocks(api) {
  const mock = new MockAdapter(api, { delayResponse: 300 })

  mock.onPost('/auth/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)
    const user = users.find((u) => u.email === email)
    if (!user || password !== 'password') return [401, { error: 'Invalid email or password' }]
    return [200, { data: { token: `mock-token-${user.id}`, user } }]
  })

  mock.onGet('/auth/me').reply((config) => {
    const id = (config.headers?.Authorization || '').replace('Bearer mock-token-', '')
    const user = users.find((u) => u.id === id)
    return user ? [200, { data: user }] : [401, { error: 'Not logged in' }]
  })

  mock.onGet('/users').reply(200, { data: users, total: users.length })
  mock.onGet('/suppliers').reply(200, { data: suppliers, total: suppliers.length })
  mock.onGet('/inventory').reply(200, { data: inventory, total: inventory.length })
  mock.onGet('/alerts').reply(200, { data: alerts, total: alerts.length })
  mock.onGet('/dashboard/summary').reply(200, { data: dashboardSummary })

  // Anything not mocked yet passes through to the real backend
  mock.onAny().passThrough()
}
