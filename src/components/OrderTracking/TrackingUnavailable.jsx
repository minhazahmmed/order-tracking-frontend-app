import { FiPackage } from "react-icons/fi";
import EmptyState from "../common/EmptyState";

export default function TrackingUnavailable() {
  return (
    <div className="bg-base-100 rounded-2xl shadow-sm">
      <EmptyState
        icon={<FiPackage size={26} />}
        title="No tracking updates yet"
        description="This usually appears within a few hours of your order being confirmed. Check back soon."
      />
    </div>
  );
}
