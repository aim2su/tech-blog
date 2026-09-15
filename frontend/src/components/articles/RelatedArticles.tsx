import { Link } from 'react-router-dom';
import type { Article } from '../../types';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

interface RelatedArticlesProps {
  articles: Article[];
  currentSlug: string;
}

export function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  const related = articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <h2 className="text-2xl font-semibold text-text mb-6">Читайте также</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((article) => (
          <Card key={article.id} as="article" className="h-full">
            <Link to={`/articles/${article.slug}`} className="block group">
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.slice(0, 2).map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>

              <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">
                {article.title}
              </h3>

              <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}