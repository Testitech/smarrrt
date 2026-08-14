"use client";

import { useMemo, useState, type ElementType, type ReactNode } from "react";
import Link from "next/link";
import { Check, Pencil, Save, X } from "lucide-react";
import type { ItemMap } from "better-content/core";
import { restTransport } from "better-content/core";
import { CmsAuthProvider, ContentEditSpan, PageProvider, useCmsItem, usePageContext } from "better-content/react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/shared/toast";
import { LANDING_COLLECTION } from "@/lib/cms/content-shared";
import { cmsImageStorage } from "@/lib/cms/client-storage";

type LandingCmsProps = { children: ReactNode; initialItems: ItemMap; isAdmin: boolean };

function EditorToolbar({ editing, setEditing }: { editing: boolean; setEditing: (value: boolean) => void }) {
  const { hasUnsavedChanges, saveAll, saving } = usePageContext();
  const toast = useToast();

  async function save() {
    try {
      await saveAll();
      toast.success("Landing page updated");
      setEditing(false);
    } catch {
      toast.error("Couldn’t save your changes", "Try again or reload the page.");
    }
  }

  return (
    <div className="fixed inset-x-3 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-2xl backdrop-blur sm:inset-x-auto sm:right-5 sm:mx-0">
      <div className="min-w-0 flex-1 px-2">
        <p className="truncate text-sm font-semibold">Landing page editor</p>
        <p className="truncate text-xs text-muted-foreground">
          {saving ? "Saving content…" : hasUnsavedChanges ? "Unsaved changes" : editing ? "Click highlighted text to edit" : "Preview mode"}
        </p>
      </div>
      {editing ? (
        <>
          <Button type="button" variant="ghost" size="sm" disabled={saving} onClick={() => setEditing(false)} aria-label="Exit editing"><X className="size-4" /></Button>
          <Button type="button" size="sm" disabled={saving || !hasUnsavedChanges} onClick={save}>
            {saving ? <span className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none" /> : <Save className="size-4" />}
            Save
          </Button>
        </>
      ) : (
        <Button type="button" size="sm" onClick={() => setEditing(true)}><Pencil className="size-4" /> Edit content</Button>
      )}
    </div>
  );
}

export function LandingCms({ children, initialItems, isAdmin }: LandingCmsProps) {
  const [editing, setEditing] = useState(false);
  const toast = useToast();
  const authState = useMemo(() => ({ isAdmin, isEditing: isAdmin && editing, toggleEdit: () => setEditing((value) => !value) }), [editing, isAdmin]);
  const notifier = useMemo(() => ({ success: (message: string) => toast.success(message), error: () => toast.error("Couldn’t save your changes", "Try again or reload the page.") }), [toast]);

  return (
    <CmsAuthProvider value={authState}>
      <PageProvider transport={restTransport({ apiBasePath: "/api/cms" })} initialItems={initialItems} notify={notifier} storage={cmsImageStorage}>
        {children}
        {isAdmin ? <EditorToolbar editing={editing} setEditing={setEditing} /> : null}
      </PageProvider>
    </CmsAuthProvider>
  );
}

export function CmsText({ itemId, fieldKey, as, className, children }: { itemId: string; fieldKey: string; as?: ElementType; className?: string; children?: ReactNode }) {
  return <ContentEditSpan collection={LANDING_COLLECTION} itemId={itemId} fieldKey={fieldKey} as={as} className={className}>{children}</ContentEditSpan>;
}

export function CmsCheckText({ itemId, fieldKey }: { itemId: string; fieldKey: string }) {
  return <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground"><Check className="size-3.5 text-primary" aria-hidden="true" /><CmsText itemId={itemId} fieldKey={fieldKey} /></span>;
}

export function CmsLink({ itemId, fieldKey, fallbackHref, children, className }: { itemId: string; fieldKey: string; fallbackHref: string; children: ReactNode; className?: string }) {
  const item = useCmsItem(LANDING_COLLECTION, itemId);
  const candidate = typeof item?.[fieldKey] === "string" ? String(item[fieldKey]) : fallbackHref;
  const href = candidate.startsWith("/") || candidate.startsWith("#") ? candidate : fallbackHref;
  return <Link href={href} className={className}>{children}</Link>;
}