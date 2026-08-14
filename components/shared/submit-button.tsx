"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = React.ComponentProps<typeof Button> & { pendingLabel: string };

export function SubmitButton({ children, disabled, pendingLabel, ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return <Button type="submit" disabled={disabled || pending} {...props}>{pending ? <><Loader2 aria-hidden="true" className="animate-spin motion-reduce:animate-none" />{pendingLabel}</> : children}</Button>;
}