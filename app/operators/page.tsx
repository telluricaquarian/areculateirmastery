import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function OperatorsPage() {
  return (
    <AppShell>
      <ExplorePage
        category="operators"
        title="Operators"
        description="Power user tools, launchers, and productivity utilities for efficient workflows."
      />
    </AppShell>
  );
}
