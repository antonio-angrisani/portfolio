export function CapabilityTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Capabilities">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line bg-stonewash/70 px-3 py-1 text-xs font-bold text-graphite"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
