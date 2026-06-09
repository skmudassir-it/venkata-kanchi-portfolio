import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/sections/ExperienceCard";

const experiences = [
  {
    company: "Hilton",
    role: "Senior Lead Software Engineer – Generative AI & Customer Platforms",
    period: "March 2022 — Present",
    location: "Memphis, TN",
    current: true,
    highlights: [
      "Spearheaded architectural design and full-stack implementation of Hilton's next-generation, AI-driven guest experience platform, transitioning legacy monolithic systems into cloud-native, event-driven microservices.",
      "Pioneered integration of advanced LLMs (OpenAI, Gemini, Anthropic) into the Hilton Honors mobile app, orchestrating an intelligent AI travel planner.",
      "Engineered a highly scalable orchestration layer using Python, LangChain, and vector databases (Pinecone) for real-time context retrieval and semantic search over unstructured property data.",
      "Optimized RAG pipelines — decreased customer search-to-booking latency by 35%, boosted direct digital channel booking revenue by 14%, reducing reliance on high-commission OTAs.",
      "Coached cross-functional engineering squads on prompt engineering, fine-tuning, and building guardrails for secure AI interaction.",
      "Designed automated CI/CD workflows on AWS using Terraform, enabling daily zero-downtime releases.",
      "Built high-throughput data pipelines using Apache Kafka syncing real-time hotel availability and user preference embeddings — handled 50,000+ concurrent API requests while saving $1.2M annually in compute overhead.",
    ],
  },
  {
    company: "PGIM",
    role: "Quantitative Software Engineer – Machine Learning & Predictive Analytics",
    period: "March 2017 — February 2021",
    location: "Memphis, TN",
    highlights: [
      "Developed and deployed production-grade machine learning models and high-frequency data pipelines to optimize institutional asset management and predictive market trend analysis.",
      "Architected a robust predictive analytics engine using Python, scikit-learn, and TensorFlow processing terabyte-scale historical market and alternative data feeds.",
      "Implemented complex time-series forecasting frameworks (LSTM networks, XGBoost) to project portfolio risk boundaries and alpha-generation opportunities, optimizing asset allocation for $1B+ in AUM.",
      "Improved model prediction accuracy by 22% and mitigated downside risk volatility by 8% over a 24-month cycle.",
      "Engineered low-latency feature stores and automated data ingestion pipelines using Apache Spark and SQL, reducing ETL processing times by 40%.",
      "Established automated ML monitoring, logging, and drift detection alerts using Prometheus and Grafana — 99.95% model deployment availability.",
    ],
  },
  {
    company: "Merck",
    role: "Bio-Informatics Software Engineer – Advanced Analytics & Clinical AI",
    period: "June 2013 — March 2017",
    location: "Boston, MA",
    highlights: [
      "Engineered core software infrastructure, data lakes, and computational pipelines to accelerate clinical trials and automate target biomarker discovery using machine learning and statistical modeling.",
      "Designed scalable distributed compute pipelines in Python and R to process massive genomic, proteomic, and EHR datasets.",
      "Implemented classical ML algorithms (Random Forests, SVMs, deep neural networks) for pattern discovery in patient response matrices — accelerated early-stage drug identification by 18 months, saving $4M per therapeutic pipeline.",
      "Developed secure, HIPAA-compliant RESTful APIs and interactive microservices for global clinical research teams, accelerating cross-functional decision-making by 30%.",
      "Optimized database execution speeds with advanced SQL and column-store tuning, yielding a 50x increase in retrieval speeds for complex phenotype querying.",
    ],
  },
  {
    company: "Wyndham Hotels & Resorts",
    role: "Senior Software Engineer – Business Intelligence & Dynamic Pricing Algorithms",
    period: "February 2008 — May 2013",
    location: "Greater Syracuse-Auburn Area",
    highlights: [
      "Led software development and modernization of Wyndham's global central reservation and dynamic property management engines, emphasizing automated pricing intelligence.",
      "Designed and coded algorithmic pricing modules using Java, SQL, and early predictive analytics to dynamically adjust room rates across thousands of franchise properties based on real-time demand metrics and competitor profiling.",
      "Drove a 9% year-over-year increase in Revenue Per Available Room (RevPAR), translating to millions in incremental system-wide revenue.",
      "Optimized Oracle SQL databases and modernized back-end data warehouses, reducing end-of-day reconciliation scripts from 4 hours to under 45 minutes — a 75% productivity gain.",
      "Built custom business intelligence dashboards using Java Swing and corporate reporting frameworks for regional franchise operations directors.",
      "Enforced rigorous JUnit testing and automated code quality gating, reducing production bugs by 30%.",
    ],
  },
  {
    company: "Deloitte",
    role: "Technology Consultant – Systems Integration & Software Engineer",
    period: "May 2007 — February 2008",
    location: "Greater Madison Area",
    highlights: [
      "Served as a core technical consultant and backend software developer delivering enterprise-tier technology transformation projects for Fortune 500 clients in financial services and retail sectors.",
      "Developed, debugged, and shipped robust enterprise services utilizing C# .NET, ASP.NET, and SQL Server, ensuring optimal code quality and adherence to strict corporate security standards.",
      "Participated in a major systems integration project consolidating disparate ERP applications into a centralized system — eliminated manual data transcription overhead, boosting operational accounting productivity by 25%.",
      "Authored automated unit test suites and integration tests identifying critical system edge cases prior to deployment, minimizing post-launch downtime.",
      "Documented comprehensive technical architecture blueprints and deployment guides, enabling client-side teams to seamlessly take ownership of the code base.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-hero-gradient overflow-hidden py-20">
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Career"
            title="Professional Experience"
            description="Nearly two decades of engineering leadership across hospitality, finance, healthcare, and consulting."
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company + exp.period} {...exp} />
          ))}
        </div>
      </section>
    </>
  );
}
