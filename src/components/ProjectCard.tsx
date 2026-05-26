import ImageWithFallback from "./ImageWithFallback";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  linkLabel?: string;
  featured?: boolean;
}

function CardContent({
  title,
  category,
  description,
  image,
  linkLabel,
  featured,
}: Omit<ProjectCardProps, "href">) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`bg-[#f0f0f0] overflow-hidden ${
          featured ? "aspect-[4/3]" : "aspect-square"
        } relative`}
      >
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <span className="text-[#bbb] text-xs">{image.split("/").pop()}</span>
        </div>
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <p className="text-xs text-[#888] uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="text-[#333] font-medium">{title}</h3>
          <p className="text-sm text-[#888] mt-1 leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
        {linkLabel && (
          <span className="text-xs text-[#888] group-hover:text-[#333] transition-colors whitespace-nowrap mt-1 ml-4">
            {linkLabel} →
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({
  href,
  linkLabel,
  ...rest
}: ProjectCardProps) {
  if (href && href !== "#") {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        <CardContent {...rest} linkLabel={linkLabel ?? (isExternal ? "View" : "Read")} />
      </a>
    );
  }
  return <CardContent {...rest} linkLabel={linkLabel} />;
}
