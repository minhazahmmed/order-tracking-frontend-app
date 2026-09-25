export default function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-10 px-4">
      {icon && <div className="bg-base-200 rounded-full p-4 text-base-content/50">{icon}</div>}
      <h3 className="font-semibold">{title}</h3>
      {description && (
        <p className="text-sm text-base-content/60 max-w-xs">{description}</p>
      )}
      {action}
    </div>
  );
}
