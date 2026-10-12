// Collects the routes exported by each feature folder. Each member edits only their own routes.jsx.
import { dashboardRoutes } from '@/features/dashboard/routes'
import { forecastRoutes } from '@/features/forecasts/routes'
import { supplierRoutes } from '@/features/suppliers/routes'
import { procurementRoutes } from '@/features/procurement/routes'
import { inventoryRoutes } from '@/features/inventory/routes'
import { alertRoutes } from '@/features/alerts/routes'
import { usersReportsRoutes } from '@/features/users-reports/routes'

export const appRoutes = [
  ...dashboardRoutes,
  ...forecastRoutes,
  ...supplierRoutes,
  ...procurementRoutes,
  ...inventoryRoutes,
  ...alertRoutes,
  ...usersReportsRoutes,
]
