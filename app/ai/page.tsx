import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function AIPage() {
  return (
    <AppShell>
      <ExplorePage
        category="ai"
        title="Artificial Intelligence"
        description="Tools, frameworks, and resources for building and leveraging AI systems."
      />
    </AppShell>
  );
}
