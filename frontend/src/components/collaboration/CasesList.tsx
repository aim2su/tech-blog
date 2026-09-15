import type { CaseExample } from '../../types';
import { Card } from '../ui/Card';

interface CasesListProps {
  cases: CaseExample[];
}

export function CasesList({ cases }: CasesListProps) {
  if (cases.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cases.map((c) => (
        <Card key={c.brand}>
          <h3 className="text-lg font-semibold text-text">{c.brand}</h3>
          <p className="mt-2 text-sm text-muted">{c.description}</p>
          <p className="mt-3 text-sm text-accent">{c.result}</p>
        </Card>
      ))}
    </div>
  );
}