import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function HomePage() {
  return (
    <AppShell>
      <ExplorePage
        category="explore"
        title="Explore"
        description="A curated index of tools, systems, references, and resources for polymathic mastery. Collect, organize, and revisit what compounds."
      />
    </AppShell>
  );
}
