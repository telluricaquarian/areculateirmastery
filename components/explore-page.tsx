"use client";

import { useState, useMemo } from "react";
import { SearchBar } from "./search-bar";
import { ResourceGrid } from "./resource-grid";
import { CategoryHeader } from "./category-header";
import { searchResources, getResourcesByCategory } from "@/lib/data";
import { Category } from "@/lib/types";

interface ExplorePageProps {
  category?: Category | "explore";
  title: string;
  description?: string;
}

export function ExplorePage({ category = "explore", title, description }: ExplorePageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = useMemo(() => {
    if (searchQuery.trim()) {
      return searchResources(searchQuery, category === "explore" ? undefined : category);
    }
    return getResourcesByCategory(category);
  }, [searchQuery, category]);

  return (
    <div className="px-4 py-6 md:px-6 lg:px-8">
      <CategoryHeader 
        title={title} 
        description={description}
        count={filteredResources.length}
      />
      
      <div className="mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={`Search ${category === "explore" ? "all resources" : title.toLowerCase()}...`}
        />
      </div>

      <ResourceGrid 
        resources={filteredResources}
        emptyMessage={searchQuery ? `No results for "${searchQuery}"` : "No resources in this category yet"}
      />
    </div>
  );
}
