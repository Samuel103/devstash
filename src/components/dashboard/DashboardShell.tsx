"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Code2,
  File,
  FileText,
  Folder,
  Image,
  Layers3,
  Link as LinkIcon,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Sparkles,
  Star,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  collections,
  currentUser,
  itemTypes,
  type MockItemType,
} from "@/lib/mock-data";

const TYPE_ICONS: Record<MockItemType["icon"], LucideIcon> = {
  "code-2": Code2,
  sparkles: Sparkles,
  terminal: Terminal,
  "file-text": FileText,
  file: File,
  image: Image,
  link: LinkIcon,
};

const TYPE_COLORS: Record<MockItemType["color"], string> = {
  blue: "text-blue-400",
  purple: "text-violet-400",
  orange: "text-orange-400",
  yellow: "text-yellow-300",
  slate: "text-slate-400",
  pink: "text-pink-400",
  emerald: "text-emerald-400",
};

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const syncSidebar = () => setIsSidebarOpen(desktopQuery.matches);

    syncSidebar();
    desktopQuery.addEventListener("change", syncSidebar);
    return () => desktopQuery.removeEventListener("change", syncSidebar);
  }, []);

  const favoriteCollections = collections.filter(
    (collection) => collection.isFavorite,
  );
  const recentCollections = collections.filter(
    (collection) => !collection.isFavorite,
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <button
          aria-label="Close sidebar"
          className={`fixed inset-0 z-30 bg-black/60 transition-opacity md:hidden ${
            isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsSidebarOpen(false)}
          type="button"
        />

        <aside
          aria-label="Dashboard navigation"
          id="dashboard-sidebar"
          className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-border bg-sidebar transition-transform duration-200 md:static md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } ${isSidebarOpen ? "md:w-72" : "md:w-16"}`}
        >
          <div className="flex h-19 items-center border-b border-border px-4">
            <Link className="flex min-w-0 items-center gap-3" href="/dashboard">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/20">
                <Layers3 aria-hidden="true" className="size-5" />
              </span>
              {isSidebarOpen && (
                <span className="truncate text-xl font-semibold tracking-tight">
                  DevStash
                </span>
              )}
            </Link>
            <button
              aria-label="Close sidebar"
              className="ml-auto hidden rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:inline-flex"
              onClick={() => setIsSidebarOpen(false)}
              type="button"
            >
              <PanelLeftClose aria-hidden="true" className="size-5" />
            </button>
            <button
              aria-label="Close navigation menu"
              className="ml-auto rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
              onClick={() => setIsSidebarOpen(false)}
              type="button"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-6">
            <SidebarSection label="Types" showLabel={isSidebarOpen}>
              {itemTypes.map((itemType) => {
                const Icon = TYPE_ICONS[itemType.icon];
                return (
                  <SidebarLink
                    href={`/items/${itemType.id}s`}
                    icon={<Icon className={`size-5 ${TYPE_COLORS[itemType.color]}`} />}
                    key={itemType.id}
                    label={itemType.name}
                    showLabel={isSidebarOpen}
                  />
                );
              })}
            </SidebarSection>

            <div className="my-5 border-t border-border" />

            <SidebarSection label="Collections" showLabel={isSidebarOpen}>
              {isSidebarOpen && (
                <p className="px-2 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Favorites
                </p>
              )}
              {favoriteCollections.map((collection) => (
                <SidebarLink
                  href={`/collections/${collection.id}`}
                  icon={<Folder className="size-5 text-muted-foreground" />}
                  key={collection.id}
                  label={collection.name}
                  showLabel={isSidebarOpen}
                  trailing={<Star className="size-4 fill-yellow-400 text-yellow-400" />}
                />
              ))}

              {isSidebarOpen && (
                <p className="px-2 pt-5 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Recent
                </p>
              )}
              {recentCollections.map((collection) => (
                <SidebarLink
                  href={`/collections/${collection.id}`}
                  icon={<Folder className="size-5 text-muted-foreground" />}
                  key={collection.id}
                  label={collection.name}
                  showLabel={isSidebarOpen}
                  trailing={
                    <span className="text-sm tabular-nums text-muted-foreground">
                      {collection.itemCount}
                    </span>
                  }
                />
              ))}
            </SidebarSection>
          </nav>

          <div className="border-t border-border p-3">
            <button
              className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-muted"
              type="button"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-200">
                {currentUser.avatarInitials}
              </span>
              {isSidebarOpen && (
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">
                    {currentUser.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {currentUser.email}
                  </span>
                </span>
              )}
            </button>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex min-h-19 items-center gap-3 border-b border-border px-4 py-4 sm:px-8">
            <button
              aria-controls="dashboard-sidebar"
              aria-expanded={isSidebarOpen}
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setIsSidebarOpen((isOpen) => !isOpen)}
              type="button"
            >
              {isSidebarOpen ? (
                <PanelLeftClose aria-hidden="true" className="hidden size-5 md:block" />
              ) : (
                <PanelLeftOpen aria-hidden="true" className="hidden size-5 md:block" />
              )}
              <Menu aria-hidden="true" className="size-5 md:hidden" />
            </button>
            <div className="relative w-full max-w-xl">
              <Input
                aria-label="Search items"
                className="h-10 bg-muted/50"
                placeholder="Search items..."
              />
            </div>
            <Button className="h-10 shrink-0 px-4">
              <Plus aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">New Item</span>
              <span className="sm:hidden">New</span>
            </Button>
          </header>

          {children}
        </section>
      </div>
    </main>
  );
}

interface SidebarSectionProps {
  children: React.ReactNode;
  label: string;
  showLabel: boolean;
}

function SidebarSection({ children, label, showLabel }: SidebarSectionProps) {
  return (
    <section aria-label={label}>
      {showLabel && (
        <h2 className="px-2 pb-3 text-sm font-medium text-muted-foreground">
          {label}
        </h2>
      )}
      <div className="space-y-1">{children}</div>
    </section>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  showLabel: boolean;
  trailing?: React.ReactNode;
}

function SidebarLink({
  href,
  icon,
  label,
  showLabel,
  trailing,
}: SidebarLinkProps) {
  return (
    <Link
      className="flex min-h-9 items-center gap-3 rounded-lg px-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent"
      href={href}
      title={showLabel ? undefined : label}
    >
      <span className="shrink-0">{icon}</span>
      {showLabel && <span className="min-w-0 flex-1 truncate">{label}</span>}
      {showLabel && trailing}
    </Link>
  );
}
