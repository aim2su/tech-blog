import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import { ArticleContent } from '../components/articles/ArticleContent';
import { RelatedArticles } from '../components/articles/RelatedArticles';
import { Tag } from '../components/ui/Tag';
import { NotFound } from './NotFound';

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  const formattedDate = new Date(article.date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Helmet>
        <title>{article.title} — Алишер Бейсебай</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        {article.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      <article className="py-12">
        <div className="container-content max-w-3xl">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Все статьи
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
              {article.title}
            </h1>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted">
              <time dateTime={article.date}>{formattedDate}</time>
              <span>·</span>
              <span>{article.readingTime} мин чтения</span>
            </div>
          </header>

          <div className="mt-10">
            <ArticleContent content={article.content} />
          </div>
        </div>

        <div className="container-content mt-16">
          <RelatedArticles articles={articles} currentSlug={article.slug} />
        </div>
      </article>
    </>
  );
}