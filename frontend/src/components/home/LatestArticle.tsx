import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

export function LatestArticle() {
  const article = articles[0];
  if (!article) return null;

  return (
    <section className="py-12">
      <div className="container-content">
        <SectionTitle subtitle="Свежее в блоге">Последняя статья</SectionTitle>

        <Card as="article">
          <Link to={`/articles/${article.slug}`} className="block group">
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>

            <h3 className="text-2xl text-text group-hover:text-accent transition-colors">
              {article.title}
            </h3>

            <p className="mt-3 text-muted">{article.excerpt}</p>

            <div className="mt-4 flex items-center gap-4 text-xs text-muted">
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
      </div>
    </section>
  );
}