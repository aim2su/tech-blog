import { Send } from 'lucide-react';
import { profile } from '../../data/profile';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const latestPost = {
  text: 'Разбираю, как ИИ меняет городские сервисы. Полный текст — в новой статье.',
  date: '2025-01-20',
};

export function LatestTelegram() {
  return (
    <section className="py-12">
      <div className="container-content">
        <SectionTitle subtitle="Свежее в Telegram">Последний пост</SectionTitle>

        <Card>
          <div className="flex items-start gap-3">
            <Send size={20} className="text-accent mt-1 shrink-0" />
            <div className="flex-1">
              <p className="text-text">{latestPost.text}</p>
              <time
                dateTime={latestPost.date}
                className="block mt-3 text-xs text-muted"
              >
                {new Date(latestPost.date).toLocaleDateString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                })}
              </time>
            </div>
          </div>

          <div className="mt-5">
            <Button
              href={profile.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Читать в Telegram
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}