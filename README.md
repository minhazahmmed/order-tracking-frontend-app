# Order Tracking Screen

## 🚀 [**Live Demo — Click Here**](https://order-tracking-app-123.netlify.app)
A responsive, mobile-first Order Tracking screen built with React + Vite,
Tailwind CSS, and DaisyUI. Handles three required edge cases (delayed order,
delivered-but-not-received, tracking not available yet) using the same
component tree and mock data — no backend required.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (default: http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## How to preview all required states

Use the pill buttons at the top of the screen ("On time", "Delayed", "Not
received", "No tracking yet") to switch between the mock orders and see the
UI adapt to each scenario. This is a demo-only control (`ScenarioSwitcher`)
included so all states are easy to verify — in a real product it would be
replaced by an actual order lookup.

## Tech stack

- React 18 + Vite
- React Router v6 (route: `/order/:orderId`)
- Tailwind CSS + DaisyUI
- react-icons

## Project structure

```
src/
  components/
    common/            Spinner, ErrorState, EmptyState
    OrderTracking/      OrderHeader, StatusBanner, DeliveryTimeline,
                        TrackingUnavailable, OrderSummaryCard,
                        SupportActions, ScenarioSwitcher
  pages/
    OrderTrackingPage.jsx   composes everything, handles loading/error
  hooks/
    useOrderTracking.js     simulated async fetch by order id
  data/
    mockOrders.js           mock data for all 4 scenarios
  utils/
    dateUtils.js
```
