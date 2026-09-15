import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import { ArticleCard } from '../components/articles/ArticleCard';
import { TagFilter } from '../components/articles/TagFilter';

export function Articles() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    if (!activeTag) return articles;
    return articles.filter((a) => a.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      <Helmet>
        <title>Статьи — Алишер Бейсебай</title>
        <meta
          name="description"
          content="Статьи о технологиях, ИИ и Smart City."
        />
      </Helmet>

      <div className="container-content py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-text">Статьи</h1>
        <p className="mt-2 text-muted">
          Пишу про технологии, ИИ и Smart City
        </p>

        <div className="mt-8">
          <TagFilter
            tags={allTags}
            activeTag={activeTag}
            onSelect={setActiveTag}
          />
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <p className="text-muted">По этому тегу пока нет статей.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}