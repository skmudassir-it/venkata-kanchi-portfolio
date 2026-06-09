import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import {
  MapPin,
  Phone,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-hero-gradient overflow-hidden py-20">
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="I'm always open to discussing new opportunities, collaborations, and technical challenges."
          />
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
          <GlassCard padding="lg" hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground mt-1">
                  3557 Southern Ave<br />
                  Memphis, TN
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg" hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <a
                  href="tel:+19014150779"
                  className="text-primary hover:underline mt-1 block"
                >
                  901-415-0779
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg" hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a
                  href="mailto:sudheerreddy123@gmail.com"
                  className="text-primary hover:underline mt-1 block"
                >
                  sudheerreddy123@gmail.com
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg" hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <BriefcaseBusiness className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/venkata-kanchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-1 block"
                >
                  linkedin.com/in/venkata-kanchi
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
