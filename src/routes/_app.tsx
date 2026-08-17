import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  BookOpen,
  CalendarDays,
  Compass,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  Sparkle,
  UserRound,
  Users,
} from "lucide-react";
import { useState, type ComponentType } from "react";

import { Wordmark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

type NavItem = { label: string; to: string; icon: ComponentType<{ className?: string }> };

const primaryNav: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Discover", to: "/discover", icon: Compass },
  { label: "Connections", to: "/connections", icon: Users },
  { label: "Events", to: "/events", icon: CalendarDays },
  { label: "Guides", to: "/guides", icon: BookOpen },
  { label: "AI Assistant", to: "/assistant", icon: Sparkle },
];

const secondaryNav: NavItem[] = [
  { label: "Profile", to: "/profile", icon: UserRound },
  { label: "Settings", to: "/settings", icon: Settings },
];

function NavList({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  const renderItem = (item: NavItem) => {
    const active = pathname === item.to;
    return (
      <Link
        key={item.to}
        to={item.to}
        onClick={onNavigate}
        className={cn(
          "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
          active
            ? "bg-primary-soft text-accent-foreground"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
      >
        <item.icon className="size-[18px] shrink-0" />
        <span className="truncate">{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className="flex flex-1 flex-col gap-1">
      <p className="px-3 pb-1 text-[11px] font-semibold tracking-widest text-muted-foreground">
        MENU
      </p>
      {primaryNav.map(renderItem)}
      <p className="px-3 pt-5 pb-1 text-[11px] font-semibold tracking-widest text-muted-foreground">
        ACCOUNT
      </p>
      {secondaryNav.map(renderItem)}
    </nav>
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <Link to="/" onClick={onNavigate} className="px-1">
        <Wordmark />
      </Link>
      <NavList onNavigate={onNavigate} />
      <div className="bg-soft-gradient rounded-2xl border border-border p-4">
        <p className="font-display text-sm font-bold">Profile strength</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {currentUser.profileCompletion}% complete — add two more interests.
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
          <div
            className="bg-brand-gradient h-full rounded-full"
            style={{ width: `${currentUser.profileCompletion}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 border-r border-sidebar-border bg-sidebar lg:block">
        <SidebarBody />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] p-0">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <SidebarBody onNavigate={() => setOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>

            <label className="relative hidden min-w-0 max-w-md items-center sm:flex">
              <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search students, events, guides…"
                className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              />
            </label>

            <div className="flex items-center gap-2 justify-self-end">
              <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                <Bell />
                <span className="bg-primary absolute right-2 top-2 size-2 rounded-full" />
              </Button>
              <Link
                to="/profile"
                className="bg-primary-soft text-accent-foreground grid size-9 place-items-center rounded-xl font-display text-xs font-bold"
              >
                {currentUser.initials}
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
