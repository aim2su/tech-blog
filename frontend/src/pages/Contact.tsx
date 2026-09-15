import { Helmet } from 'react-helmet-async';
import { profile } from '../data/profile';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { SocialLinks } from '../components/home/SocialLinks';
import { SectionTitle } from '../components/ui/SectionTitle';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Контакты — {profile.name}</title>
        <meta
          name="description"
          content="Связаться с Алишером Бейсебаем: email, Telegram, форма обратной связи."
        />
        <meta property="og:title" content={`Контакты — ${profile.name}`} />
        <meta
          property="og:description"
          content="Связаться с техноблогером Алишером Бейсебаем."
        />
      </Helmet>

      <div className="container-content py-12 max-w-4xl">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-text">
            Контакты
          </h1>
          <p className="mt-3 text-muted text-lg">
            Есть вопрос, идея или предложение? Напишите — отвечу в течение 1–2 дней.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionTitle subtitle="Заполните форму ниже">
              Написать сообщение
            </SectionTitle>
            <ContactForm />
          </div>

          <div>
            <SectionTitle subtitle="Или напрямую">
              Прямые контакты
            </SectionTitle>
            <ContactInfo />
          </div>
        </div>

        <div className="mt-20">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}