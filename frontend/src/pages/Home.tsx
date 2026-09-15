import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { LatestVideo } from '../components/home/LatestVideo';
import { LatestArticle } from '../components/home/LatestArticle';
import { LatestTelegram } from '../components/home/LatestTelegram';
import { SocialLinks } from '../components/home/SocialLinks';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Блогер, автор статей — технологии, ИИ, Smart City</title>
        <meta
          name="description"
          content="Современный блог: технологии, искусственный интеллект, Smart City и будущее интернета."
        />
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="Технологии, ИИ и Smart City — личный блог."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <LatestVideo />
      <LatestArticle />
      <LatestTelegram />
      <SocialLinks />
    </>
  );
}