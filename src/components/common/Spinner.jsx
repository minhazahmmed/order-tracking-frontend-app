export default function Spinner({ label = "Loading order..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <span className="loading loading-spinner loading-lg text-primary" />
      <p className="text-sm text-base-content/60">{label}</p>
    </div>
  );
}
