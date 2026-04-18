import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function SystemsPage() {
  return (
    <AppShell>
      <ExplorePage
        category="systems"
        title="Systems"
        description="Knowledge management, project tracking, and organizational tools for structured thinking."
      />
    </AppShell>
  );
}
