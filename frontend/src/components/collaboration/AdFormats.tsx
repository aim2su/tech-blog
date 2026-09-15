import type { AdFormat } from '../../types';
import { Card } from '../ui/Card';

interface AdFormatsProps {
  formats: AdFormat[];
}

export function AdFormats({ formats }: AdFormatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {formats.map((format) => (
        <Card key={format.title} className="h-full">
          <h3 className="text-lg font-semibold text-text">{format.title}</h3>
          <p className="mt-2 text-sm text-muted">{format.description}</p>
        </Card>
      ))}
    </div>
  );
}