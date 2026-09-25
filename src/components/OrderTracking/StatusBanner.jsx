import { FiClock, FiAlertTriangle, FiHelpCircle } from "react-icons/fi";

/**
 * Renders the correct banner for whichever edge case the order is in:
 * - delayed: estimated delivery time has passed
 * - not_received: marked delivered, but customer says otherwise
 * - tracking_unavailable: no tracking info exists yet
 * Returns null for the normal/happy path (no banner needed).
 */
export default function StatusBanner({ order, onContactSupport, onReportIssue }) {
  if (order.scenario === "delayed") {
    return (
      <div className="alert bg-warning/10 border border-warning/30 items-start">
        <FiClock className="text-warning mt-0.5 shrink-0" size={20} />
        <div className="flex-1">
          <p className="font-semibold text-sm">Your delivery is taking longer than expected</p>
          <p className="text-xs text-base-content/70 mt-0.5">
            We're sorry for the delay. Your courier is still on the way — we'll update the
            estimate as soon as we have a new time.
          </p>
        </div>
        <button onClick={onContactSupport} className="btn btn-warning btn-xs">
          Contact support
        </button>
      </div>
    );
  }

  if (order.scenario === "not_received") {
    return (
      <div className="alert bg-error/10 border border-error/30 items-start">
        <FiAlertTriangle className="text-error mt-0.5 shrink-0" size={20} />
        <div className="flex-1">
          <p className="font-semibold text-sm">Marked as delivered — but didn't receive it?</p>
          <p className="text-xs text-base-content/70 mt-0.5">
            If this order hasn't arrived, let us know right away and we'll investigate with the
            courier.
          </p>
        </div>
        <button onClick={onReportIssue} className="btn btn-error btn-xs text-white">
          Report an issue
        </button>
      </div>
    );
  }

  if (order.scenario === "tracking_unavailable") {
    return (
      <div className="alert bg-info/10 border border-info/30 items-start">
        <FiHelpCircle className="text-info mt-0.5 shrink-0" size={20} />
        <div className="flex-1">
          <p className="font-semibold text-sm">Tracking isn't available just yet</p>
          <p className="text-xs text-base-content/70 mt-0.5">
            Your order has been received and is being prepared. Tracking details will appear
            here as soon as it ships.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
