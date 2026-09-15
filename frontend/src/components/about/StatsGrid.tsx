import type { Stat } from '../../types';
import { Card } from '../ui/Card';

interface StatsGridProps {
  stats: Stat[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-accent">{stat.value}</div>
          <div className="mt-2 text-xs text-muted">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
}