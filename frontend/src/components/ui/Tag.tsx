interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent border border-accent/20">
      {label}
    </span>
  );
}