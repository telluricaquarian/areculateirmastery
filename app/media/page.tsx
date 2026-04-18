import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function MediaPage() {
  return (
    <AppShell>
      <ExplorePage
        category="media"
        title="Media"
        description="Video, audio, and content creation tools for producing and sharing media."
      />
    </AppShell>
  );
}
