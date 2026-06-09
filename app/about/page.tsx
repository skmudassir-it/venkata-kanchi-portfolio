import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Languages } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-hero-gradient overflow-hidden py-20">
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="About"
            title="Venkata Kanchi"
            description="Senior Software Engineer &amp; AI Innovator — Memphis Metropolitan Area"
          />
        </div>
      </section>

      {/* Bio */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          {/* Professional Summary */}
          <GlassCard padding="lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Professional Summary
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Senior Software Engineer and AI Innovator with nearly two
                decades of experience designing, scaling, and modernizing
                enterprise-grade applications. My career spans critical
                sectors—including hospitality, global finance, healthcare, and
                technology consulting—where I have consistently bridged the gap
                between complex software architecture and cutting-edge data
                science.
              </p>
              <p>
                I specialize in transforming raw AI concepts into high-throughput,
                cloud-native production systems — from building advanced
                Retrieval-Augmented Generation (RAG) pipelines and orchestrating
                LLMs (OpenAI, Gemini, Anthropic) using LangChain and vector
                databases at Hilton, to engineering predictive time-series models
                for asset management at PGIM.
              </p>
              <p>
                I treat engineering as a vehicle for growth. My solutions are
                deeply tied to financial and operational metrics, having
                successfully driven a 14% increase in direct booking revenue,
                optimized asset allocation for $1B+ in AUM, accelerated clinical
                trial R&amp;D to save $4M, and reduced infrastructure overhead
                by millions.
              </p>
            </div>
          </GlassCard>

          {/* Top Skills */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Top Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "C#",
                "Relationship Management",
                "Unit Testing",
                "Python",
                "Java",
                "AWS",
                "Machine Learning",
                "Generative AI",
                "LangChain",
                "Kubernetes",
                "Apache Kafka",
                "SQL",
                ".NET",
                "TensorFlow",
                "MLOps",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-primary/5 text-primary border-primary/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Languages */}
          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Languages className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Languages</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/50">
                <p className="font-semibold text-foreground">Telugu</p>
                <p className="text-sm text-muted-foreground">
                  Native or Bilingual
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <p className="font-semibold text-foreground">English</p>
                <p className="text-sm text-muted-foreground">
                  Full Professional
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-4">
              <GlassCard padding="lg">
                <h3 className="font-semibold text-foreground">
                  Master of Science — Electrical, Electronics and Communications
                  Engineering
                </h3>
                <p className="text-primary font-medium mt-1">
                  Fachhochschule Darmstadt
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Darmstadt, Germany
                  </span>
                  <span>2003 — 2005</span>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <h3 className="font-semibold text-foreground">
                  Bachelor of Technology — Electrical, Electronics and
                  Communications Engineering
                </h3>
                <p className="text-primary font-medium mt-1">
                  Valagapudi Ramakrishna Siddhartha Engineering College
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Vijayawada, India
                  </span>
                  <span>1997 — 2001</span>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Career Journey */}
          <GlassCard padding="lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Career Journey
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              My technical foundation was forged in enterprise application
              development and systems integration at Deloitte and Wyndham, where
              I mastered deep backend engineering (Java, .NET, SQL) and
              algorithmic pricing. I later shifted toward deep data domains,
              applying machine learning to genomics and clinical data at Merck,
              before advancing to quantitative ML engineering at PGIM. Today, at
              Hilton, I operate at the forefront of the Generative AI
              revolution, leading squads to build hyper-personalized,
              intelligent customer platforms.
            </p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
