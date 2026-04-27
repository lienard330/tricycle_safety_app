# SafeRide Admin Dashboard

Web dashboard for CCMPTODA admins to manage the SafeRide system.

## Run

```bash
npm install
npm run dev
```

Opens at http://localhost:5173. Log in with any credentials (prototype).

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v3
- React Router v6
- Lucide icons

## Screens

| Route | Screen |
|-------|--------|
| `/login` | Admin login (dark teal) |
| `/overview` | KPIs, bar chart, activity feed |
| `/drivers` | Table with filter chips + register modal |
| `/trips` | Live trip list, SOS highlighted |
| `/complaints` | Review, resolve, dismiss |
| `/fares` | Editable LTFRB tariff |
| `/announcements` | Create + publish list |
| `/analytics` | Charts + driver reliability bars |
| `/map` | Live map with pins + legend |

## Mock Data

All data is hardcoded in `src/data/mockData.ts`.
Replace with real API calls post-proposal.
