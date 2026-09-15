import type { PlatformStat } from '../../types';
import { Card } from '../ui/Card';

interface PlatformStatsProps {
  platforms: PlatformStat[];
}

export function PlatformStats({ platforms }: PlatformStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {platforms.map((p) => (
        <Card key={p.platform} className="h-full flex flex-col">
          <h3 className="text-lg font-semibold text-text">{p.platform}</h3>
          <p className="mt-1 text-xs text-muted flex-1">{p.description}</p>

          <dl className="mt-4 space-y-2">
            <div>
              <dt className="text-xs text-muted">Подписчиков</dt>
              <dd className="text-xl font-bold text-accent">{p.followers}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Средний охват</dt>
              <dd className="text-sm text-text">{p.avgViews}</dd>
            </div>
          </dl>
        </Card>
      ))}
    </div>
  );
}