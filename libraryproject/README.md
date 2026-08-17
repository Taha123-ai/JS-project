# Champions Library — Seat Allocation Management System (Demo)

A frontend-only React demo built to show a library owner how a seat allocation
and student management product could look and work. No backend, database, or
authentication — everything runs on realistic mock data in the browser.

## Tech Stack

- React 18 (functional components + hooks)
- React Router v6 (page navigation)
- CSS Modules (component-scoped styling, no UI framework)
- Vite (dev server / build tool)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the app
# Vite will print a local URL, typically http://localhost:5173
```

Other scripts:

```bash
npm run build     # production build into /dist
npm run preview   # preview the production build locally
```

## Folder Structure

```
champions-library/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                     # React entry point (Router + App)
    ├── App.jsx                      # Layout shell: Sidebar + routed pages
    ├── App.module.css
    ├── index.css                    # Design tokens, reset, global styles
    │
    ├── data/
    │   └── mockData.js              # Library config + seeded mock students/seats
    │
    ├── components/                  # Reusable, presentation-focused pieces
    │   ├── Sidebar/
    │   ├── Topbar/
    │   ├── StatCard/
    │   ├── Legend/
    │   ├── SearchBar/
    │   ├── OccupancyBar/
    │   ├── Seat/
    │   ├── SeatGrid/
    │   └── SeatModal/
    │
    └── pages/                       # Route-level views
        ├── Dashboard/
        └── SeatAllocation/
```

Every component folder contains a `ComponentName.jsx` and a matching
`ComponentName.module.css`, so styles never leak between components.

## Seat Layout

- The library has **8 sections (columns) — A through H**, each with **7 seats
  (rows)**, for **56 total seats**.
- Seat numbers follow a real reading-hall convention: `A1`–`A7`, `B1`–`B7`, …
  `H1`–`H7`.
- The grid is built with native **CSS Grid** (`grid-auto-flow: column`) so
  seats visually fill top-to-bottom within each section before moving to the
  next — just like a real floor plan.

## Seat Status Colors

| Color | Meaning              |
| ------ | -------------------- |
| 🟢 Green  | Available            |
| 🟠 Orange | Occupied — One Shift |
| 🔴 Red    | Occupied — Full Day  |

## Pages

- **Dashboard** — Total Seats, Available, One Shift Occupied, Full Day
  Occupied, and Total Registered Students summary cards, plus an occupancy
  breakdown bar and a recent admissions panel.
- **Seat Allocation** — legend, live search (by student name, seat number, or
  phone number), and the interactive seat grid. Clicking any seat opens a
  modal with full student details (or "Seat Available" if free).

## Notes for the Demo

- All students, seats, and dates are generated from a seeded random function
  in `src/data/mockData.js`, so the numbers stay identical on every reload —
  useful for repeatable client walkthroughs.
- To change the library's size, edit `COLUMNS` and `ROWS_PER_COLUMN` in
  `mockData.js`.
- To connect this to a real backend later, replace the data source in
  `mockData.js` with API calls — the components already consume plain
  JavaScript objects/arrays and don't assume where the data comes from.
