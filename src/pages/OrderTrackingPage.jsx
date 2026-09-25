import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useOrderTracking } from "../hooks/useOrderTracking";
import Spinner from "../components/common/Spinner";
import ErrorState from "../components/common/ErrorState";
import OrderHeader from "../components/OrderTracking/OrderHeader";
import StatusBanner from "../components/OrderTracking/StatusBanner";
import DeliveryTimeline from "../components/OrderTracking/DeliveryTimeline";
import TrackingUnavailable from "../components/OrderTracking/TrackingUnavailable";
import OrderSummaryCard from "../components/OrderTracking/OrderSummaryCard";
import SupportActions from "../components/OrderTracking/SupportActions";
import ScenarioSwitcher from "../components/OrderTracking/ScenarioSwitcher";

export default function OrderTrackingPage() {
  const { orderId } = useParams();
  const { order, loading, error, refetch } = useOrderTracking(orderId);
  const reportDialogRef = useRef(null);

  return (
    <div className="min-h-screen bg-base-200 flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-base-200 px-4 py-5 flex flex-col gap-4">
        <ScenarioSwitcher activeId={orderId} />

        {loading && <Spinner />}
        {!loading && error && <ErrorState message={error} onRetry={refetch} />}

        {!loading && !error && order && (
          <>
            <OrderHeader order={order} />

            <StatusBanner
              order={order}
              onContactSupport={() => reportDialogRef.current?.showModal()}
              onReportIssue={() => reportDialogRef.current?.showModal()}
            />

            {order.trackingAvailable ? (
              <DeliveryTimeline order={order} />
            ) : (
              <TrackingUnavailable />
            )}

            <OrderSummaryCard order={order} />

            <SupportActions order={order} reportDialogRef={reportDialogRef} />
          </>
        )}
      </div>
    </div>
  );
}
