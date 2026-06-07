import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
  details: string;
  tag: string;
  glowColor: string;
}

const EDUCATION_PATH: EducationItem[] = [
  {
    year: '2024 – 2028',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu',
    details: 'Focusing on full-stack software development, mobile platforms, systems programming, and modern machine learning/AI techniques.',
    tag: 'Undergraduate',
    glowColor: 'group-hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
  },
  {
    year: '2022 – 2024',
    degree: 'Higher Secondary Education',
    institution: 'Velammal Bodhi Campus',
    location: 'Ponneri, Chennai',
    details: 'Completed curriculum specializing in Advanced Mathematics, Computer Science, Physics, and Chemistry.',
    tag: 'High School',
    glowColor: 'group-hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
  },
  {
    year: 'Until 2022',
    degree: 'Secondary School Education (Class X)',
    institution: 'Vidya Mandir School',
    location: 'Ariyalur, Tamil Nadu',
    details: 'Completed foundational school curriculum culminating in Secondary School Certificate (SSC) studies.',
    tag: 'Secondary School',
    glowColor: 'group-hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Timeline
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-16 sm:mb-24"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
        >
          Academic & Professional Pathway
        </p>
      </FadeIn>

      {/* Timeline Layout */}
      <div className="relative mx-auto max-w-4xl">
        {/* Central Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-20" />

        <div className="flex flex-col gap-12 sm:gap-16">
          {EDUCATION_PATH.map((item, i) => {
            const isEven = i % 2 === 0;

            return (
              <div key={item.institution} className="relative w-full group">
                {/* Timeline Dot */}
                <div 
                  className="absolute left-4 sm:left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#D7E2EA]/30 bg-[#0c0c0c] z-10 transition-all duration-500 group-hover:scale-125 group-hover:border-cyan-400 group-hover:bg-cyan-500" 
                />

                <FadeIn delay={i * 0.15} y={40} className="w-full">
                  <div className={`flex flex-col sm:flex-row items-stretch gap-8 sm:gap-16 w-full ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    {/* Empty space on opposite side for desktop layout */}
                    <div className="hidden sm:block sm:w-1/2" />

                    {/* Card Content Side */}
                    <div className="sm:w-1/2 pl-10 sm:pl-0">
                      <div
                        className={`relative flex flex-col gap-4 rounded-[28px] sm:rounded-[32px] border border-[#D7E2EA]/15 bg-[#141418] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 ${item.glowColor}`}
                      >
                        {/* Badge / Year row */}
                        <div className="flex items-center justify-between gap-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]/70">
                            <Calendar size={12} />
                            {item.year}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                            {item.tag}
                          </span>
                        </div>

                        {/* Header */}
                        <div className="flex flex-col gap-1">
                          <h3 className="font-semibold text-white text-lg sm:text-xl leading-snug">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/65 font-medium">
                            <GraduationCap size={16} className="text-[#D7E2EA]/55" />
                            <span>{item.institution}</span>
                          </div>
                        </div>

                        {/* Details */}
                        <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light leading-relaxed">
                          {item.details}
                        </p>

                        {/* Location footer */}
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#D7E2EA]/40 mt-1 uppercase font-semibold tracking-wider">
                          <MapPin size={12} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
