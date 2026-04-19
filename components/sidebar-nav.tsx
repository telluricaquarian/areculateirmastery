"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Compass,
  Brain,
  Palette,
  Code,
  Zap,
  Layers,
  Search,
  Terminal,
  Play,
  PenTool,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, getCategoryCount } from "@/lib/data";
import { SubmitCta } from "./submit-cta";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Brain,
  Palette,
  Code,
  Zap,
  Layers,
  Search,
  Terminal,
  Play,
  PenTool,
};

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:fixed md:top-0 md:left-0 md:z-50 md:flex md:h-screen md:w-64 md:flex-col md:border-r md:border-border md:bg-background">
      {/* Brand */}
      <Link
        href="/"
        className="relative z-10 mx-2 my-1 flex h-14 items-center rounded-md px-4 transition-colors hover:bg-accent/50"
        aria-label="Go to homepage"
      >
        <Image
          src="/amlogo.svg"
          alt="areculateir mastery"
          width={140}
          height={64}
          className="h-10 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="flex flex-col gap-1">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            const isActive =
              pathname === category.href ||
              (category.slug !== "explore" && pathname.startsWith(category.href));
            const count = getCategoryCount(category.slug);

            return (
              <div key={category.slug}>
                {index === 1 && (
                  <div className="my-2 border-t border-border" />
                )}
                <Link
                  href={category.href}
                  aria-label={category.label}
                  className={cn(
                    "flex items-center justify-between rounded-lg p-2 transition-colors",
                    "hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-foreground" />
                    <span className="relative flex items-center gap-2 text-sm font-medium">
                      {category.label}
                    </span>
                  </div>
                  <span className="flex h-6 min-w-6 items-center justify-center rounded-lg bg-muted px-2 text-xs font-medium">
                    {count}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          A curated index of tools, systems, and resources for polymathic mastery.
        </p>
        <SubmitCta />
      </div>
    </nav>
  );
}
