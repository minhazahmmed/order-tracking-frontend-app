import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import { mockOrderIds } from "./data/mockOrders";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/order/${mockOrderIds[0]}`} replace />} />
        <Route path="/order/:orderId" element={<OrderTrackingPage />} />
        <Route path="*" element={<Navigate to={`/order/${mockOrderIds[0]}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
