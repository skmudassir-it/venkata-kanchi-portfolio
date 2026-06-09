import SectionHeading from "@/components/ui/SectionHeading";
import SkillsGrid from "@/components/sections/Skills";

export default function SkillsPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-hero-gradient overflow-hidden py-20">
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Tech Stack"
            title="Tools & Technologies"
            description="Every language, framework, platform, and tool leveraged across nearly two decades of enterprise engineering — organized by category."
          />
        </div>
      </section>

      <SkillsGrid />
    </>
  );
}
