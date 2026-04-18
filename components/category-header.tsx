interface CategoryHeaderProps {
  title: string;
  description?: string;
  count?: number;
}

export function CategoryHeader({ title, description, count }: CategoryHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {count !== undefined && (
          <span className="text-lg text-muted-foreground">
            {count} {count === 1 ? "resource" : "resources"}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
