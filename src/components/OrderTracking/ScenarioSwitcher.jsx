import { useNavigate } from "react-router-dom";
import { mockOrders } from "../../data/mockOrders";

const LABELS = {
  normal: "On time",
  delayed: "Delayed",
  not_received: "Not received",
  tracking_unavailable: "No tracking yet",
};

// Dev/demo helper only — lets an evaluator jump between the mock orders
// to see how the UI adapts to each required scenario. Not part of the
// "real" product UI, but included so all states are easy to verify.
export default function ScenarioSwitcher({ activeId }) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
      {Object.values(mockOrders).map((o) => (
        <button
          key={o.id}
          onClick={() => navigate(`/order/${o.id}`)}
          className={`btn btn-xs whitespace-nowrap ${
            activeId === o.id ? "btn-primary" : "btn-outline"
          }`}
        >
          {LABELS[o.scenario]}
        </button>
      ))}
    </div>
  );
}
