"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, Brain, Palette, Code, Zap, Layers, Search, Terminal, Play, PenTool } from "lucide-react";
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

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background px-4">
        <Link href="/" className="flex items-center" aria-label="Go to homepage">
          <Image
            src="/amlogo.svg"
            alt="areculateir mastery"
            width={140}
            height={64}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 transition-colors hover:bg-accent/50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "fixed top-14 left-0 right-0 z-40 overflow-hidden border-b border-border bg-background shadow-lg transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[calc(100vh-3.5rem)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-4">
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
                    onClick={() => setIsOpen(false)}
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

          {/* Footer in Mobile Menu */}
          <div className="mt-4 border-t border-border pt-4">
            <p className="mb-3 px-1 text-sm leading-relaxed text-muted-foreground">
              A curated index of tools, systems, and resources for polymathic mastery.
            </p>
            <SubmitCta />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
