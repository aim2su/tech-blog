interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onSelect: (tag: string | null) => void;
}

export function TagFilter({ tags, activeTag, onSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Фильтр по тегам">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
          activeTag === null
            ? 'bg-accent text-bg border-accent'
            : 'bg-transparent text-muted border-border hover:border-accent hover:text-accent'
        }`}
      >
        Все
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
          className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
            activeTag === tag
              ? 'bg-accent text-bg border-accent'
              : 'bg-transparent text-muted border-border hover:border-accent hover:text-accent'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}