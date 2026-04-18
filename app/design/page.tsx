import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function DesignPage() {
  return (
    <AppShell>
      <ExplorePage
        category="design"
        title="Design"
        description="Design tools, inspiration sources, and creative resources for crafting exceptional interfaces."
      />
    </AppShell>
  );
}
