import { useEffect, useState } from "react";
import { mockOrders } from "../data/mockOrders";

/**
 * Simulates fetching a single order by id from a backend.
 * Returns { order, loading, error, refetch } so the UI can render
 * loading / error / success states exactly like it would with a real API.
 */
export function useOrderTracking(orderId) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setOrder(null);

    const timer = setTimeout(() => {
      if (cancelled) return;
      const found = mockOrders[orderId];
      if (found) {
        setOrder(found);
      } else {
        setError(`We couldn't find an order with ID "${orderId}".`);
      }
      setLoading(false);
    }, 600); // small delay so the loading state is actually visible

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [orderId, attempt]);

  const refetch = () => setAttempt((a) => a + 1);

  return { order, loading, error, refetch };
}
