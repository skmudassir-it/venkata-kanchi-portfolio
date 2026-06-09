import Link from "next/link";
import { BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-white tracking-tight"
            >
              VK<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Senior Software Engineer &amp; AI Innovator — building intelligent
              platforms that drive real business impact.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                <span>3557 Southern Ave, Memphis, TN</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 shrink-0 text-white/40" />
                <span>901-415-0779</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 shrink-0 text-white/40" />
                <span>sudheerreddy123@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* LinkedIn */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <a
              href="https://www.linkedin.com/in/venkata-kanchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <BriefcaseBusiness className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Venkata Kanchi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
