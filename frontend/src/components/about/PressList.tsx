import type { PressItem } from '../../types';

interface PressListProps {
  items: PressItem[];
}

export function PressList({ items }: PressListProps) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item.url + item.date}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 group"
          >
            <div>
              <h3 className="text-text group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted mt-1">{item.source}</p>
            </div>
            <time
              dateTime={item.date}
              className="text-xs text-muted shrink-0"
            >
              {new Date(item.date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </a>
        </li>
      ))}
    </ul>
  );
}