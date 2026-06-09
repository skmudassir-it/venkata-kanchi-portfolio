import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-sm font-semibold tracking-wider uppercase mb-3 px-3 py-1 rounded-full",
            light
              ? "bg-white/15 text-white/90"
              : "bg-primary/10 text-primary",
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold tracking-tight",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
