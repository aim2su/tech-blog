interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div
      className="prose prose-invert max-w-none
        prose-headings:text-text prose-headings:font-semibold
        prose-p:text-text prose-p:leading-relaxed
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-text
        prose-code:text-accent prose-code:bg-surface prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-surface prose-pre:border prose-pre:border-border
        prose-blockquote:border-l-accent prose-blockquote:text-muted
        prose-img:rounded-xl prose-img:border prose-img:border-border"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}