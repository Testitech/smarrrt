"use client";

import { useEffect, useRef } from "react";
import { useToast, type ToastType } from "@/components/shared/toast";

export function AdminNoticeToast({ title, description, type }: { title: string; description: string; type: ToastType }) {
  const toast = useToast();
  const shown = useRef(false);
  useEffect(() => { if (shown.current) return; shown.current = true; toast[type](title, description); }, [description, title, toast, type]);
  return null;
}