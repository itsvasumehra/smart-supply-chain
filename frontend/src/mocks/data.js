// Fake data. Shapes follow the API contract in docs/. Add more as features need it.
export const users = [
  { id: 'u1', name: 'Asha (Admin)', email: 'admin@demo.com', role: 'admin' },
  { id: 'u2', name: 'Ravi (Manager)', email: 'manager@demo.com', role: 'manager' },
  { id: 'u3', name: 'Meena (Procurement)', email: 'procurement@demo.com', role: 'procurement' },
]

export const suppliers = [
  { id: 's1', name: 'ABC Traders', phone: '9876500001', score: 88 },
  { id: 's2', name: 'FreshFarm Foods', phone: '9876500002', score: 74 },
  { id: 's3', name: 'QuickMove Logistics', phone: '9876500003', score: 61 },
]

export const inventory = [
  { productId: 'p7', name: 'Rice 1kg', quantity: 40, reorderLevel: 100, status: 'low', updatedAt: '2026-10-12T09:30:00Z' },
  { productId: 'p8', name: 'Sugar 1kg', quantity: 220, reorderLevel: 100, status: 'ok', updatedAt: '2026-10-12T09:28:00Z' },
  { productId: 'p9', name: 'Milk 1L', quantity: 8, reorderLevel: 50, status: 'critical', updatedAt: '2026-10-12T09:25:00Z' },
]

export const alerts = [
  { id: 'a9', type: 'temperature_high', severity: 'critical', message: 'Cold room B is above limit', status: 'open', createdAt: '2026-10-12T09:31:00Z' },
  { id: 'a10', type: 'low_stock', severity: 'warning', message: 'Rice 1kg is below reorder level', status: 'open', createdAt: '2026-10-12T09:20:00Z' },
]

export const dashboardSummary = {
  itemsInStock: 12480,
  lowStockCount: 14,
  onTimeDeliveryPercent: 91,
  openAlerts: 5,
}
