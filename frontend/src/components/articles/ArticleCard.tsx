import { Link } from 'react-router-dom';
import type { Article } from '../../types';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card as="article" className="h-full flex flex-col">
      <Link to={`/articles/${article.slug}`} className="flex flex-col h-full group">
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <h2 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
          {article.title}
        </h2>

        <p className="mt-3 text-sm text-muted flex-1">{article.excerpt}</p>

        <div className="mt-4 flex items-center gap-3 text-xs text-muted">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span>·</span>
          <span>{article.readingTime} мин чтения</span>
        </div>
      </Link>
    </Card>
  );
}