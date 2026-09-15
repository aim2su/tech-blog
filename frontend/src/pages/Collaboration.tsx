import { Helmet } from 'react-helmet-async';
import { platforms, adFormats, cases } from '../data/collaboration';
import { profile } from '../data/profile';
import { PlatformStats } from '../components/collaboration/PlatformStats';
import { AdFormats } from '../components/collaboration/AdFormats';
import { CasesList } from '../components/collaboration/CasesList';
import { ContactForm } from '../components/collaboration/ContactForm';
import { SectionTitle } from '../components/ui/SectionTitle';

export function Collaboration() {
  return (
    <>
      <Helmet>
        <title>Сотрудничество — {profile.name}</title>
        <meta
          name="description"
          content="Реклама и сотрудничество с техноблогером Алишером Бейсебаем. Статистика аудитории, форматы, примеры работ."
        />
        <meta
          property="og:title"
          content={`Сотрудничество — ${profile.name}`}
        />
        <meta
          property="og:description"
          content="Реклама и сотрудничество с техноблогером."
        />
      </Helmet>

      <div className="container-content py-12 max-w-4xl">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-text">
            Сотрудничество
          </h1>
          <p className="mt-3 text-muted text-lg">
            Рассказываю о технологиях 222K подписчикам на YouTube и 54K в
            Telegram. Открыт к рекламным интеграциям и партнёрствам.
          </p>
        </header>

        <section className="mt-12">
          <SectionTitle subtitle="Где и сколько">Аудитория</SectionTitle>
          <PlatformStats platforms={platforms} />
        </section>

        <section className="mt-16">
          <SectionTitle subtitle="Что можно заказать">
            Форматы рекламы
          </SectionTitle>
          <AdFormats formats={adFormats} />
        </section>

        <section className="mt-16">
          <SectionTitle subtitle="Что уже делал">Примеры работ</SectionTitle>
          <CasesList cases={cases} />
        </section>

        <section className="mt-16">
          <SectionTitle subtitle="Расскажите о проекте">
            Оставить заявку
          </SectionTitle>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
