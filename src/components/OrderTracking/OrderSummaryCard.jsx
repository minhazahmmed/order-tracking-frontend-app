import { useState } from "react";
import { FiBox, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function OrderSummaryCard({ order }) {
  const [expanded, setExpanded] = useState(false);
  const itemCount = order.items.reduce((sum, i) => sum + i.qty, 0);
  const total = order.items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div className="bg-base-100 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary rounded-xl p-2.5">
            <FiBox size={18} />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold">
              {itemCount} item{itemCount > 1 ? "s" : ""}
            </p>
            <p className="text-xs text-base-content/50">View order details</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">${total.toFixed(2)}</span>
          {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-base-200 p-4 space-y-3 text-sm">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between text-base-content/80">
              <span>
                {item.name} <span className="text-base-content/40">× {item.qty}</span>
              </span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className="divider my-1" />
          <div className="flex justify-between text-xs text-base-content/60">
            <span>Shipping address</span>
            <span className="text-right max-w-[60%]">{order.shippingAddress}</span>
          </div>
          <div className="flex justify-between text-xs text-base-content/60">
            <span>Payment method</span>
            <span>{order.paymentMethod}</span>
          </div>
          <div className="flex justify-between font-semibold pt-1">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
