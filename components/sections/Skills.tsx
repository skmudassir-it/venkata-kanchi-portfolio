import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Cpu, Database, BarChart3, Code2, Cloud, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML & Generative AI",
    icon: BrainCircuit,
    skills: [
      "LLMs (OpenAI, Gemini, Anthropic)",
      "LangChain & Vector DBs (Pinecone)",
      "RAG Pipelines",
      "Prompt Engineering",
      "TensorFlow, scikit-learn",
      "Time-Series Forecasting (LSTM, XGBoost)",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS (Terraform, CI/CD)",
      "Kubernetes & Docker",
      "Apache Kafka & Spark",
      "Microservices Architecture",
      "Auto-scaling & Cost Optimization",
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      "SQL (Oracle, PostgreSQL)",
      "Data Warehousing",
      "ETL Pipeline Design",
      "Feature Stores",
      "Streaming Infrastructure",
    ],
  },
  {
    title: "Backend Development",
    icon: Code2,
    skills: [
      "Python, Java, C#, C++",
      ".NET / ASP.NET",
      "RESTful API Design",
      "JUnit & Automated Testing",
      "SDLC Best Practices",
    ],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    skills: [
      "Predictive Analytics",
      "Business Intelligence Dashboards",
      "Revenue Management Systems",
      "ML Monitoring (Prometheus, Grafana)",
      "Data Visualization",
    ],
  },
  {
    title: "Domain Expertise",
    icon: Cpu,
    skills: [
      "Hospitality & Revenue Mgmt",
      "Finance & Asset Management",
      "Healthcare & Bioinformatics",
      "HIPAA Compliance",
      "Technology Consulting",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          description="A broad technical toolkit spanning AI/ML, cloud architecture, data engineering, and enterprise backend development."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <GlassCard key={cat.title} hover>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
