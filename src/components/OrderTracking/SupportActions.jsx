import { useRef, useState } from "react";
import { FiPhone, FiMail, FiFlag, FiCheckCircle } from "react-icons/fi";

export default function SupportActions({ order, reportDialogRef }) {
  const localRef = useRef(null);
  const dialogRef = reportDialogRef || localRef;
  const [submitted, setSubmitted] = useState(false);
  const [note, setNote] = useState("");

  const openModal = () => {
    setSubmitted(false);
    setNote("");
    dialogRef.current?.showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — this simulates a successful report submission.
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-base-100 rounded-2xl shadow-sm p-4">
        <h2 className="font-semibold text-sm mb-3">Need help with this order?</h2>
        <div className="grid grid-cols-3 gap-2">
          <a href={`tel:${order.support.phone}`} className="btn btn-outline btn-sm flex-col h-16 gap-1">
            <FiPhone size={16} />
            <span className="text-[11px]">Call</span>
          </a>
          <a href={`mailto:${order.support.email}`} className="btn btn-outline btn-sm flex-col h-16 gap-1">
            <FiMail size={16} />
            <span className="text-[11px]">Email</span>
          </a>
          <button onClick={openModal} className="btn btn-outline btn-sm flex-col h-16 gap-1">
            <FiFlag size={16} />
            <span className="text-[11px]">Report issue</span>
          </button>
        </div>
      </div>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-base">Report a delivery issue</h3>
              <p className="text-xs text-base-content/60 mt-1 mb-3">
                Order {order.id} — tell us what happened and our support team will follow up.
              </p>
              <textarea
                required
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="textarea textarea-bordered w-full text-sm"
                rows={4}
                placeholder="E.g. Package marked delivered but not at my door..."
              />
              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => dialogRef.current?.close()}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Submit report
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-2 py-4">
              <FiCheckCircle className="text-success" size={32} />
              <p className="font-semibold text-sm">Report submitted</p>
              <p className="text-xs text-base-content/60">
                We've received your report and will follow up by email shortly.
              </p>
              <button
                className="btn btn-sm btn-primary mt-2"
                onClick={() => dialogRef.current?.close()}
              >
                Close
              </button>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
