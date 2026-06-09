import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import {
  BrainCircuit,
  Cloud,
  Database,
  Code2,
  BarChart3,
  Cpu,
  Wrench,
  Shield,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "C#",
      "C++",
      "SQL",
      "R",
    ],
  },
  {
    title: "AI / ML & Generative AI",
    icon: BrainCircuit,
    skills: [
      "OpenAI (GPT Models)",
      "Google Gemini",
      "Anthropic Claude",
      "LangChain",
      "Pinecone (Vector DB)",
      "RAG Pipelines",
      "Prompt Engineering",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "LSTM Networks",
      "Random Forests",
      "SVMs",
      "Deep Neural Networks",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Terraform",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Auto-scaling",
      "Zero-Downtime Deploy",
      "Query Caching",
    ],
  },
  {
    title: "Data & Streaming",
    icon: Database,
    skills: [
      "Apache Kafka",
      "Apache Spark",
      "ETL Pipeline Design",
      "Oracle SQL",
      "PostgreSQL",
      "Data Warehousing",
      "Feature Stores",
      "Column-Store DBs",
      "Streaming Infrastructure",
      "Data Lakes",
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: Cpu,
    skills: [
      ".NET / ASP.NET",
      "RESTful API Design",
      "Microservices Architecture",
      "JUnit Testing",
      "SDLC Best Practices",
      "HIPAA-Compliant APIs",
      "Java Swing",
      "Spring Framework",
    ],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    skills: [
      "Predictive Analytics",
      "BI Dashboards",
      "Revenue Management",
      "ML Monitoring",
      "Data Visualization",
      "Statistical Modeling",
      "Time-Series Forecasting",
      "Algorithmic Pricing",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git / GitHub",
      "Docker Hub",
      "Kubernetes (K8s)",
      "Apache Kafka",
      "Apache Spark",
      "Terraform Cloud",
      "SQL Server",
      "Oracle DB",
    ],
  },
  {
    title: "Compliance & Security",
    icon: Shield,
    skills: [
      "HIPAA Compliance",
      "Data Integrity",
      "Security Auditing",
      "Code Quality Gating",
      "Automated Testing",
      "Reproducible Environments",
      "Access Control",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Tech Stack"
          title="Skills & Technologies"
          description="A comprehensive toolkit spanning AI/ML, cloud architecture, data engineering, backend development, and enterprise platforms — extracted from nearly two decades of hands-on engineering."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <GlassCard key={cat.title} hover padding="md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-1.5">
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
