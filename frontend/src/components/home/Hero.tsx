import { profile } from '../../data/profile';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-content">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <img
            src={profile.avatar}
            alt={profile.name}
            width={120}
            height={120}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold text-text">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-accent">{profile.tagline}</p>
            <p className="mt-4 text-muted max-w-2xl">{profile.bio}</p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
              <Button to="/articles">Читать статьи</Button>
              <Button to="/collaboration" variant="secondary">
                Сотрудничество
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}