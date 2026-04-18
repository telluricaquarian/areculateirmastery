import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function AutomationPage() {
  return (
    <AppShell>
      <ExplorePage
        category="automation"
        title="Automation"
        description="Workflow automation tools and integration platforms that save time and reduce friction."
      />
    </AppShell>
  );
}
