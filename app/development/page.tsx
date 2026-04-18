import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function DevelopmentPage() {
  return (
    <AppShell>
      <ExplorePage
        category="development"
        title="Development"
        description="Developer tools, platforms, and services for building and shipping software."
      />
    </AppShell>
  );
}
