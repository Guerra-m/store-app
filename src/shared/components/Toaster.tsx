import { useToastStore } from "../store/toast.store";

const styles = {
  success: "bg-green-500 text-white",
  error:   "bg-red-500 text-white",
  info:    "bg-surface-container border border-outline-variant text-on-surface",
};

const icons = {
  success: "✓",
  error:   "✕",
  info:    "ℹ",
};

export const Toaster = () => {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg
            pointer-events-auto cursor-pointer
            animate-in slide-in-from-right-4 fade-in duration-200
            ${styles[toast.type]}
          `}
          onClick={() => removeToast(toast.id)}
        >
          <span className="font-bold text-sm">{icons[toast.type]}</span>
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
