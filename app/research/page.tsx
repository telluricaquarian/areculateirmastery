import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function ResearchPage() {
  return (
    <AppShell>
      <ExplorePage
        category="research"
        title="Research"
        description="Tools and platforms for discovering, reading, and synthesizing knowledge."
      />
    </AppShell>
  );
}
