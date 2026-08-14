"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { AlertTriangle, CheckCircle2, CircleAlert, Info, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "warning" | "info";
type Toast = { id: string; type: ToastType; title: string; message?: string; duration?: number };
type ToastApi = Record<ToastType, (title: string, message?: string) => void>;
const ToastContext = createContext<ToastApi | null>(null);
const styles: Record<ToastType, { icon: LucideIcon; accent: string; iconClass: string }> = {
  success: { icon: CheckCircle2, accent: "border-l-emerald-500", iconClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  error: { icon: CircleAlert, accent: "border-l-destructive", iconClass: "bg-destructive/10 text-destructive" },
  warning: { icon: AlertTriangle, accent: "border-l-amber-500", iconClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400" },
  info: { icon: Info, accent: "border-l-primary", iconClass: "bg-primary/10 text-primary" },
};

function ToastItem({ toast, dismiss }: { toast: Toast; dismiss: (id: string) => void }) {
  const [visible, setVisible] = useState(false);
  const style = styles[toast.type];
  const Icon = style.icon;
  const close = useCallback(() => { setVisible(false); window.setTimeout(() => dismiss(toast.id), 180); }, [dismiss, toast.id]);
  useEffect(() => {
    const showTimer = window.setTimeout(() => setVisible(true), 10);
    const dismissTimer = window.setTimeout(close, toast.duration ?? 4500);
    return () => { window.clearTimeout(showTimer); window.clearTimeout(dismissTimer); };
  }, [close, toast.duration]);
  return (
    <div role={toast.type === "error" ? "alert" : "status"} aria-live={toast.type === "error" ? "assertive" : "polite"} className={cn("pointer-events-auto flex w-full items-start gap-3 rounded-xl border border-l-4 border-border bg-background p-4 text-foreground shadow-xl transition duration-200 motion-reduce:transition-none sm:max-w-sm", style.accent, visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 motion-reduce:translate-y-0")}>
      <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg", style.iconClass)}><Icon aria-hidden="true" className="size-4" /></span>
      <div className="min-w-0 flex-1 pt-0.5"><p className="text-sm font-semibold leading-5">{toast.title}</p>{toast.message ? <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{toast.message}</p> : null}</div>
      <button type="button" onClick={close} aria-label="Dismiss notification" className="grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><X aria-hidden="true" className="size-4" /></button>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const dismiss = useCallback((id: string) => setToasts((current) => current.filter((toast) => toast.id !== id)), []);
  const add = useCallback((type: ToastType, title: string, message?: string) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current.slice(-2), { id, type, title, message }]);
  }, []);
  const api = useMemo<ToastApi>(() => ({ success: (title, message) => add("success", title, message), error: (title, message) => add("error", title, message), warning: (title, message) => add("warning", title, message), info: (title, message) => add("info", title, message) }), [add]);
  return <ToastContext.Provider value={api}>{children}<div className="pointer-events-none fixed inset-x-3 top-3 z-[100] flex flex-col items-end gap-2 sm:inset-x-auto sm:right-5 sm:top-5">{toasts.map((toast) => <ToastItem key={toast.id} toast={toast} dismiss={dismiss} />)}</div></ToastContext.Provider>;
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}