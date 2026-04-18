import { SidebarNav } from "./sidebar-nav";
import { MobileNav } from "./mobile-nav";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <MobileNav />
      
      {/* Main Content Area */}
      <main className="flex-1 pt-14 md:pt-0 md:pl-64">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
