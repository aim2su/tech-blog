import { videos } from '../../data/videos';
import { SectionTitle } from '../ui/SectionTitle';

export function LatestVideo() {
  const video = videos[0];
  if (!video) return null;

  return (
    <section className="py-12">
      <div className="container-content">
        <SectionTitle subtitle="Свежее на YouTube">Последнее видео</SectionTitle>

        <div className="aspect-video rounded-xl overflow-hidden border border-border">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        </div>

        <h3 className="mt-4 text-lg text-text">{video.title}</h3>
      </div>
    </section>
  );
}