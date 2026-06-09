import { ArrowDown, BriefcaseBusiness, Brain, Cloud } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60" />

      {/* Accent blur */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary">
            Senior Software Engineer &amp; AI Innovator
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Venkata{" "}
            <span className="text-primary">Kanchi</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Nearly two decades of experience designing, scaling, and modernizing
            enterprise-grade applications — bridging complex software architecture
            with cutting-edge AI to drive measurable business impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              render={<Link href="/experience" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-elevated transition-all"
            >
              <span className="inline-flex items-center gap-2">
                View Experience
                <ArrowDown className="w-4 h-4" />
              </span>
            </Button>
            <Button
              render={<Link href="/contact" />}
              variant="outline"
              size="lg"
              className="border-primary/20 text-primary hover:bg-primary/5"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: BriefcaseBusiness,
              value: "18+",
              label: "Years Experience",
            },
            {
              icon: Brain,
              value: "Gen AI",
              label: "LLMs · RAG · LangChain",
            },
            {
              icon: Cloud,
              value: "AWS",
              label: "Cloud-Native Architecture",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl shadow-card p-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
