import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const summaryHighlights = [
  {
    title: "AI/ML Productionalization",
    description:
      "Transforming raw AI concepts into high-throughput, cloud-native production systems. Built advanced RAG pipelines and LLM orchestration layers at Hilton.",
  },
  {
    title: "Data & Cloud Architecture",
    description:
      "Scalable, low-latency microservices and distributed data pipelines using Kafka, Spark, AWS, and Kubernetes for enterprise-scale workloads.",
  },
  {
    title: "Measurable Business Impact",
    description:
      "14% direct booking revenue increase, $1.2M annual cloud savings, $4M R&D cost avoidance, and 22% improvement in model prediction accuracy.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Summary */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="About Me"
            title="Bridging Software & AI"
            description="I'm a Senior Software Engineer and AI Innovator with nearly two decades of experience across hospitality, global finance, healthcare, and technology consulting."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {summaryHighlights.map((item) => (
              <GlassCard key={item.title} hover>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              render={<Link href="/about" />}
              variant="outline"
              size="lg"
              className="border-primary/20 text-primary hover:bg-primary/5"
            >
              <span className="inline-flex items-center gap-2">
                More About Me
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      <Skills />

      {/* CTA */}
      <section className="py-20 bg-footer-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            title="Let's Work Together"
            description="I'm always open to discussing new opportunities, AI innovations, and technical challenges."
            light
          />
          <div className="mt-8">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-card"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
