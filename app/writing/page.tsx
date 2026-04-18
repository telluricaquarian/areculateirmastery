import { AppShell } from "@/components/app-shell";
import { ExplorePage } from "@/components/explore-page";

export default function WritingPage() {
  return (
    <AppShell>
      <ExplorePage
        category="writing"
        title="Writing"
        description="Tools for writing, thinking, and publishing ideas across platforms."
      />
    </AppShell>
  );
}
