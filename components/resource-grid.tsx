"use client";

import { Resource } from "@/lib/types";
import { ResourceCard } from "./resource-card";
import { SearchX } from "lucide-react";

interface ResourceGridProps {
  resources: Resource[];
  emptyMessage?: string;
}

export function ResourceGrid({ resources, emptyMessage = "No resources found" }: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <SearchX className="mb-4 h-12 w-12 text-muted-foreground/50" />
        <h3 className="text-lg font-medium text-foreground">{emptyMessage}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your search or browse other categories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
