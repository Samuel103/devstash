import { Layers3, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[18rem_1fr]">
        <aside className="border-b border-border bg-sidebar p-6 md:border-r md:border-b-0">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/20">
              <Layers3 aria-hidden="true" className="size-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight">DevStash</span>
          </div>

          <section className="mt-12" aria-label="Sidebar placeholder">
            <h2 className="text-sm font-medium text-muted-foreground">Sidebar</h2>
          </section>
        </aside>

        <section className="min-w-0">
          <header className="flex min-h-19 items-center gap-4 border-b border-border px-5 py-4 sm:px-8">
            <div className="relative w-full max-w-xl">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                aria-label="Search items"
                className="h-10 bg-muted/50 pl-10"
                placeholder="Search items..."
              />
            </div>
            <Button className="h-10 shrink-0 px-4">
              <Plus aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">New Item</span>
              <span className="sm:hidden">New</span>
            </Button>
          </header>

          <section className="p-5 sm:p-8" aria-label="Main area placeholder">
            <h2 className="text-xl font-semibold tracking-tight">Main</h2>
          </section>
        </section>
      </div>
    </main>
  );
}
