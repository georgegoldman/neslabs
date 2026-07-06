export type ProjectCardProps = { name: string; desc: string; category?: string; href?: string };

export function ProjectCard({ name, desc, category = "infrastructure", href }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col p-6 lg:p-10 border-b md:border-b-0 md:border-r md:last:border-r-0 border-neutral-70 transition-colors hover:bg-brand-light">
      <div className="flex-1">
        <h3 className="text-2xl lg:text-3xl font-mono font-bold leading-tight mb-4 text-white transition-colors">
          <a href={href || "#"} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined} className="before:absolute before:inset-0">
            {name}
          </a>
        </h3>
        <p className="text-base text-neutral-40 group-hover:text-neutral-80 transition-colors line-clamp-3 mb-6">
          {desc}
        </p>
      </div>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest mt-auto">
        <span className="inline-flex items-center h-8 px-3 border border-neutral-70 rounded-full text-neutral-40 group-hover:border-white group-hover:text-white transition-colors">
          {category}
        </span>
      </div>
    </div>
  );
}
