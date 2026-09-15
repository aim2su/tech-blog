import { Mail, Send } from 'lucide-react';
import { profile } from '../../data/profile';
import { Card } from '../ui/Card';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-start gap-3">
          <Mail size={20} className="text-accent mt-1 shrink-0" />
          <div>
            <h3 className="text-text font-medium">Email</h3>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block text-sm text-muted hover:text-accent transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start gap-3">
          <Send size={20} className="text-accent mt-1 shrink-0" />
          <div>
            <h3 className="text-text font-medium">Telegram</h3>
            <a
              href={profile.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-muted hover:text-accent transition-colors"
            >
              @alisherbeisebai
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}