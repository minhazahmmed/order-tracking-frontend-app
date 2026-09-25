import { formatDate } from "../../utils/dateUtils";

export default function OrderHeader({ order }) {
  return (
    <div className="flex items-center justify-between px-1">
      <div>
        <h1 className="text-lg font-bold">Order {order.id}</h1>
        <p className="text-xs text-base-content/50">
          Placed on {formatDate(order.placedAt)}
        </p>
      </div>
    </div>
  );
}
