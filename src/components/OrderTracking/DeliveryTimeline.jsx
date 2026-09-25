import { FiPackage, FiTruck, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { ORDER_STATUS_STEPS } from "../../data/mockOrders";
import { formatDateTime, isPast } from "../../utils/dateUtils";

const ICONS = {
  processing: FiPackage,
  shipped: FiTruck,
  out_for_delivery: FiMapPin,
  delivered: FiCheckCircle,
};

export default function DeliveryTimeline({ order }) {
  const currentIndex = ORDER_STATUS_STEPS.findIndex((s) => s.key === order.status);
  const delayed = order.scenario === "delayed" && isPast(order.estimatedDelivery);

  return (
    <div className="bg-base-100 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-sm">Delivery progress</h2>
        {order.estimatedDelivery && (
          <span className={`text-xs font-medium ${delayed ? "text-warning" : "text-base-content/60"}`}>
            {delayed ? "New estimate pending" : `Est. ${formatDateTime(order.estimatedDelivery)}`}
          </span>
        )}
      </div>

      <ul className="steps steps-vertical w-full">
        {ORDER_STATUS_STEPS.map((step, index) => {
          const Icon = ICONS[step.key];
          const isDone = index <= currentIndex;
          const isCurrent = index === currentIndex;
          const timestamp = order.stepTimestamps?.[step.key];

          return (
            <li
              key={step.key}
              data-content={isDone ? "✓" : "●"}
              className={`step text-left ${isDone ? "step-primary" : ""}`}
            >
              <div className="flex items-center gap-2 py-1">
                <Icon
                  className={isDone ? "text-primary" : "text-base-content/30"}
                  size={16}
                />
                <div>
                  <p className={`text-sm ${isCurrent ? "font-semibold" : ""}`}>{step.label}</p>
                  {timestamp && (
                    <p className="text-[11px] text-base-content/50">{formatDateTime(timestamp)}</p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
