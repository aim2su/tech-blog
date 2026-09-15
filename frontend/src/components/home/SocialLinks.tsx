import { profile } from '../../data/profile';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import instagramIcon from '../../assets/icons/instagram.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';

const socials = [
  {
    href: profile.socials.youtube,
    label: 'YouTube',
    description: 'Видео о технологиях',
    icon: youtubeIcon,
  },
  {
    href: profile.socials.telegram,
    label: 'Telegram',
    description: 'Мысли и ссылки',
    icon: telegramIcon,
  },
  {
    href: profile.socials.tiktok,
    label: 'TikTok',
    description: 'Короткие видео',
    icon: tiktokIcon,
  },
  {
    href: profile.socials.instagram,
    label: 'Instagram',
    description: 'За кадром',
    icon: instagramIcon,
  },
];

export function SocialLinks() {
  return (
    <section className="py-12">
      <div className="container-content">
        <SectionTitle subtitle="Где меня читать">Я в соцсетях</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map(({ href, label, description, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:border-accent">
                <img
                  src={icon}
                  alt={label}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <h3 className="mt-3 text-text font-medium">{label}</h3>
                <p className="mt-1 text-sm text-muted">{description}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}