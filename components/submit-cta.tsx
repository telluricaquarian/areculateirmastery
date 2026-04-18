"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SubmitCta() {
  return (
    <Button
      className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90"
      onClick={() => {
        // Placeholder for submit functionality
        alert("Submit resource functionality coming soon!");
      }}
    >
      <Plus className="h-4 w-4" />
      Submit Resource
    </Button>
  );
}
