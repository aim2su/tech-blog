import { Helmet } from 'react-helmet-async';
import { profile } from '../data/profile';
import { StatsGrid } from '../components/about/StatsGrid';
import { ProjectsList } from '../components/about/ProjectsList';
import { PressList } from '../components/about/PressList';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';

export function About() {
  return (
    <>
      <Helmet>
        <title>Обо мне</title>
        <meta name="description" content={profile.bio} />
        <meta property="og:title" content={`Обо мне ${profile.name}`} />
        <meta property="og:description" content={profile.bio} />
      </Helmet>

      <div className="container-content py-12 max-w-4xl">
        <header>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <img
              src={profile.avatar}
              alt={profile.name}
              width={160}
              height={160}
              className="w-40 h-40 rounded-full object-cover border-2 border-border"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-text">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-accent">{profile.tagline}</p>
            </div>
          </div>

          {/* <div className="mt-8 space-y-4 text-text leading-relaxed">
            {profile.longBio.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div> */}
                    <div className="mt-8 space-y-4 text-text leading-relaxed">
            <p>
              Всем привет, я блогер и автор статей в интернете! Я пишу о технологиях, которые меняют повседневную жизнь.
            </p>
            <p>
              Мой фокус — искусственный интеллект, умные города и будущее
              интернета.
            </p>
            <p>
              Я верю, что сложные вещи можно объяснять простыми словами — без
              снобизма и лишнего жаргона.
            </p>
            <p>
              Здесь я собираю свои статьи, видео и мысли, чтобы у всего был
              один дом, а не десять разных платформ.
            </p>
          </div>
        </header>

        <section className="mt-16">
          <SectionTitle subtitle="Цифры, которые говорят сами за себя">
            Статистика
          </SectionTitle>
          <StatsGrid stats={profile.stats} />
        </section>

        <section className="mt-16">
          <SectionTitle subtitle="Чем я занимаюсь">Проекты</SectionTitle>
          <ProjectsList projects={profile.projects} />
        </section>

        <section className="mt-16">
          <SectionTitle subtitle="Где меня публикуют">Пресса</SectionTitle>
          <PressList items={profile.press} />
        </section>

        <section className="mt-16 p-8 bg-surface border border-border rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Хотите поработать вместе?
          </h2>
          <p className="mt-2 text-muted">
            Открыт к сотрудничеству с брендами и медиа.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button to="/collaboration">Сотрудничество</Button>
            <Button to="/contact" variant="secondary">
              Связаться
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}