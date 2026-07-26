"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertTriangle, X, Info } from "lucide-react";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

export type ToastType = "success" | "error" | "warning" | "info";

export type Toast = {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
};

type ToastProps = {
  toast: Toast;
  onDismiss: (id: string) => void;
};

// ─────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────

const TOAST_CONFIG: Record<
  ToastType,
  {
    icon: React.ElementType;
    containerClass: string;
    iconClass: string;
    titleClass: string;
  }
> = {
  success: {
    icon: CheckCircle,
    containerClass:
      "border-green-200 bg-green-50 dark:bg-green-950/40 dark:border-green-800",
    iconClass: "text-green-600 dark:text-green-400",
    titleClass: "text-green-800 dark:text-green-300",
  },
  error: {
    icon: AlertTriangle,
    containerClass:
      "border-red-200 bg-red-50 dark:bg-red-950/40 dark:border-red-800",
    iconClass: "text-red-600 dark:text-red-400",
    titleClass: "text-red-800 dark:text-red-300",
  },
  warning: {
    icon: AlertTriangle,
    containerClass:
      "border-yellow-200 bg-yellow-50 dark:bg-yellow-950/40 dark:border-yellow-800",
    iconClass: "text-yellow-600 dark:text-yellow-400",
    titleClass: "text-yellow-800 dark:text-yellow-300",
  },
  info: {
    icon: Info,
    containerClass:
      "border-blue-200 bg-blue-50 dark:bg-blue-950/40 dark:border-blue-800",
    iconClass: "text-blue-600 dark:text-blue-400",
    titleClass: "text-blue-800 dark:text-blue-300",
  },
};

// ─────────────────────────────────────────
// SINGLE TOAST
// ─────────────────────────────────────────

function ToastItem({ toast, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false);
  const config = TOAST_CONFIG[toast.type];
  const Icon = config.icon;

  useEffect(() => {
    // Animate in
    const showTimer = setTimeout(() => setVisible(true), 10);

    // Auto dismiss
    const dismissTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onDismiss(toast.id), 300);
    }, toast.duration ?? 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(dismissTimer);
    };
  }, [toast.id, toast.duration, onDismiss]);

  return (
    <div
      className={`
        flex items-start gap-3 w-full max-w-sm
        border rounded-xl px-4 py-3 shadow-lg
        transition-all duration-300 ease-out
        ${config.containerClass}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
      `}
    >
      {/* Icon */}
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconClass}`} />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${config.titleClass}`}>
          {toast.title}
        </p>
        {toast.message && (
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
            {toast.message}
          </p>
        )}
      </div>

      {/* Dismiss button */}
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onDismiss(toast.id), 300);
        }}
        className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors mt-0.5"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────
// TOAST CONTAINER
// ─────────────────────────────────────────

type ToastContainerProps = {
  toasts: Toast[];
  onDismiss: (id: string) => void;
};

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 items-end">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// TOAST HOOK
// Use this anywhere in the app
// ─────────────────────────────────────────

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function addToast(
    type: ToastType,
    title: string,
    message?: string,
    duration?: number,
  ) {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message, duration }]);
  }

  function dismissToast(id: string) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return {
    toasts,
    dismissToast,
    success: (title: string, message?: string) =>
      addToast("success", title, message),
    error: (title: string, message?: string) =>
      addToast("error", title, message),
    warning: (title: string, message?: string) =>
      addToast("warning", title, message),
    info: (title: string, message?: string) => addToast("info", title, message),
  };
}
