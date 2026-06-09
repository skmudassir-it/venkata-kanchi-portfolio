import { cn } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
}

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  highlights,
  current = false,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl shadow-card hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 p-6 sm:p-8",
        current && "ring-1 ring-accent/30 shadow-glow",
      )}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-foreground">{company}</h3>
            {current && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                Current
              </span>
            )}
          </div>
          <p className="text-primary font-medium mt-0.5">{role}</p>
        </div>
        <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-2.5">
        {highlights.map((h, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
