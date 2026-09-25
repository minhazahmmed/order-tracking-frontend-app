import { FiAlertOctagon } from "react-icons/fi";

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-20 px-4">
      <div className="bg-error/10 text-error rounded-full p-4">
        <FiAlertOctagon size={28} />
      </div>
      <h2 className="font-semibold text-lg">Something went wrong</h2>
      <p className="text-sm text-base-content/60 max-w-xs">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-primary btn-sm mt-2">
          Try again
        </button>
      )}
    </div>
  );
}
