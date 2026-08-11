import { Award, Network, Cpu, Brain, Flame, Cloud, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

interface Certification {
  icon: typeof Network;
  title: string;
  issuer: string;
  category: string;
  description: string;
  colorClass: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    icon: Network,
    title: 'Network Basics',
    issuer: 'Cisco Networking Academy',
    category: 'Networking',
    description: 'Covers foundational networking concepts, protocols, IPv4/IPv6 subnetting, routing basics, and network troubleshooting.',
    colorClass: 'border-cyan-500/20 text-cyan-400 bg-cyan-950/20 hover:border-cyan-500/50',
  },
  {
    icon: Cpu,
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    category: 'Internet of Things',
    description: 'Explores the Internet of Things ecosystem, sensor integration, connectivity standards, and security implications in IoT design.',
    colorClass: 'border-purple-500/20 text-purple-400 bg-purple-950/20 hover:border-purple-500/50',
  },
  {
    icon: Brain,
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    category: 'Artificial Intelligence',
    description: 'Completed the Google AI Professional Certificate program through Coursera, covering AI fundamentals, prompt engineering, AI-assisted research, content creation, data analysis, communication, and application building.',
    colorClass: 'border-blue-500/20 text-blue-400 bg-blue-950/20 hover:border-blue-500/50',
  },
  {
    icon: ShieldCheck,
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    category: 'Cybersecurity',
    description: 'Completed the Google Cybersecurity Professional Certificate covering network security, threat detection, Python scripting, SIEM tools, SQL, and incident response fundamentals.',
    colorClass: 'border-emerald-500/20 text-emerald-400 bg-emerald-950/20 hover:border-emerald-500/50',
  },
  {
    icon: Cloud,
    title: 'Google Cloud Generative AI Leader',
    issuer: 'Google Cloud',
    category: 'Generative AI',
    description: 'A Generative AI Leader understands how Gen AI can transform businesses and uses Google Cloud’s AI solutions to drive innovation. They identify AI opportunities, lead Gen AI initiatives, and promote responsible, enterprise-ready AI adoption across industries.',
    colorClass: 'border-teal-500/20 text-teal-400 bg-teal-950/20 hover:border-teal-500/50',
  },
  {
    icon: Flame,
    title: 'AI Tools Workshop',
    issuer: 'B10x',
    category: 'AI Productivity',
    description: 'Practical hands-on training for leveraging modern AI productivity tools, prompt optimization, and workflow automation.',
    colorClass: 'border-amber-500/20 text-amber-400 bg-amber-950/20 hover:border-amber-500/50',
  },
];

const CertificationsSection = () => {
  return (
    <section
      id="certificates"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-10"
    >
      {/* Heading */}
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Credentials
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
        >
          Certifications & Professional Milestones
        </p>
      </FadeIn>

      {/* Certificates Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {CERTIFICATIONS.map((cert, i) => {
          const Icon = cert.icon;

          return (
            <FadeIn key={cert.title} delay={i * 0.1} y={30}>
              <div
                className={`group relative flex items-start gap-5 sm:gap-6 rounded-[28px] sm:rounded-[32px] border bg-[#141418] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${cert.colorClass}`}
              >
                {/* Icon wrapper */}
                <div className="rounded-2xl border border-current/20 p-3.5 sm:p-4 transition-all duration-300 group-hover:scale-105">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-60">
                    {cert.category}
                  </span>
                  <h3 className="font-semibold text-[#D7E2EA] leading-tight text-base sm:text-lg break-words group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-[#D7E2EA]/50 font-medium">
                    {cert.issuer}
                  </span>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mt-2">
                    {cert.description}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Verified
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection;
