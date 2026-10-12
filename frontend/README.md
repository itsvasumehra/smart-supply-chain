# Frontend

## Run it
```bash
npm install
cp .env.example .env     # VITE_USE_MOCKS=true works without a backend
npm run dev
```
Demo logins (mock mode): `admin@demo.com`, `manager@demo.com`, `procurement@demo.com` - password `password`.

## Team rules
- Branches: `main` (demo only) <- `develop` <- `feature/m<number>-<name>`
- Work only inside your own `src/features/<name>/` folder.
- Shared files (`src/components`, `src/services`, `src/routes`, `src/context`) belong to Member 1. Ask first.
- Use `import api from '@/services/api'` for all backend calls. Never create another Axios instance.
- Pull `develop` into your branch daily. Keep pull requests small. One teammate reviews each PR.
- If you change an endpoint, update the API contract in `docs/` in the same PR.

## Folder owners
| Folder | Owner |
|---|---|
| features/auth, features/users-reports | Member 1 |
| features/suppliers, features/procurement | Member 2 |
| features/inventory, features/alerts | Member 3 |
| features/dashboard, features/forecasts | Member 4 |
