"use client";

import { ArrowUpRight } from "lucide-react";
import { Resource } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${resource.title} - ${resource.description}`}
      className={cn(
        "group relative flex h-full flex-col gap-3 rounded-xl border border-dashed border-border/50 bg-card p-3",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/30",
        "hover:shadow-lg hover:shadow-primary/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      {/* Image Container */}
      <div className="relative h-36 w-full overflow-hidden rounded-lg bg-muted/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-2xl font-bold text-primary">
            {resource.title.charAt(0)}
          </div>
        </div>
        {/* Featured Badge */}
        {resource.featured && (
          <div className="absolute top-2 left-2 rounded-md bg-primary/90 px-2 py-0.5 text-xs font-medium text-primary-foreground">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="line-clamp-1 text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
            {resource.title}
          </h3>
          {/* Animated Arrow */}
          <div className="relative h-4 w-4 overflow-hidden">
            <div className="absolute translate-y-6 text-primary opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {resource.description}
        </p>
      </div>

      {/* Tags */}
      {resource.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
