import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  liveUrl: string;
  downloadUrl?: string;
  githubUrl?: string;
  col1Image1: string;
  col1Image2?: string;
  col2Image?: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Mobile App Development',
    name: 'SecureCity',
    description: `SecureCity is a Flutter-based mobile application that promotes urban safety through real-time reporting and tracking of stray animals, garbage dumps, and other civic issues. The app features GPS-based location tracking, proximity alerts, emergency SOS support, and a pet adoption portal, helping citizens contribute to safer and cleaner communities.

Tech Stack: Flutter, Firebase, Google Maps API 🚀`,
    liveUrl: 'https://github.com/Vishva-57/SecureCity',
    downloadUrl: '/securecity.apk',
    col1Image1: '/securecity-1.jpg',
    col1Image2: '/securecity-2.jpg',
    col2Image: '/securecity-3.jpg',
  },
  {
    number: '02',
    category: 'Web Platform',
    name: 'Smart Classroom',
    description: `Smart Classroom Management System is a web-based platform featuring secure QR-code attendance verification to prevent proxy entries. The application facilitates teacher-student chat for doubt clarification, study material sharing, and assignment submission.

Tech Stack: React.js, Python, MongoDB, SQL 🚀`,
    liveUrl: 'https://smart-classroom-system-etvl.onrender.com/',
    githubUrl: 'https://github.com/Vishva-57/Smart-Classroom-System',
    col1Image1: '/smartclassroom-dashboard.png',
  },
  {
    number: '03',
    category: 'AI Web Platform',
    name: 'Basilisk Blind Spot',
    description: `Basilisk's Blind Spot is a full-stack AI-powered web accessibility auditing platform that evaluates websites against WCAG 2.1 AA standards. Built with Next.js, TypeScript, Playwright, Axe-core, Prisma, and Tailwind CSS, it automatically detects accessibility issues, generates detailed reports with severity-based insights, and provides actionable recommendations to help developers create more inclusive and accessible web applications.

Tech Stack: Next.js, TypeScript, Playwright, Axe-core, Prisma, Tailwind CSS, Vercel 🚀`,
    liveUrl: 'https://basiliskblindspot.netlify.app/',
    githubUrl: 'https://github.com/Vishva-57/Basilisk-Blind-Spot/',
    col1Image1: '/basilisk-1.png',
    col1Image2: '/basilisk-2.png',
    col2Image: '/basilisk-3.png',
  },
  {
    number: '04',
    category: 'Crisis & Incident Management',
    name: 'Crisis Alert System',
    description: `Crisis Alert System is a real-time emergency dispatch and campus incident management platform. Features slide-to-dispatch emergency reporting (Fire, Medical, Security), live interactive command map tracking, evidence collection (photo/video clip recording), safety equipment locator, and AI-powered emergency briefing generation.

Tech Stack: Next.js, React, Tailwind CSS, Leaflet, OpenStreetMap, Vercel 🚀`,
    liveUrl: 'https://crisis-alert-system-iota.vercel.app/',
    githubUrl: 'https://github.com/Vishva-57/Crisis_Alert_System',
    col1Image1: '/crisis-1.png',
    col1Image2: '/crisis-2.png',
    col2Image: '/crisis-3.png',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ProjectCard = ({ project, index, total, containerRef }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const images = [project.col1Image1, project.col1Image2, project.col2Image].filter(Boolean) as string[];
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Scroll progress for THIS card relative to the whole projects scroll range.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  // Cards further down the stack stay full-size; earlier cards scale DOWN
  // as later cards stack on top of them.
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 sm:top-24 md:top-32 min-h-[85vh] md:h-[80vh] lg:h-[85vh] w-full flex items-center justify-center pb-8 md:pb-0"
      style={{ top: `${80 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto min-h-[80vh] md:h-full w-full flex flex-col justify-center rounded-[30px] sm:rounded-[45px] md:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 flex-1 min-h-0 items-stretch md:items-center">
          {/* Left Column: Details */}
          <div className="flex flex-col justify-between md:h-full py-2 md:py-6 min-w-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/60">
                  {project.category}
                </span>
                <div className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] font-black text-[#D7E2EA]/15 leading-none select-none">
                  {project.number}
                </div>
              </div>
              <h3 className="font-bold uppercase text-white tracking-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-[15px] text-[#D7E2EA]/80 font-light leading-relaxed max-w-xl whitespace-pre-line overflow-y-auto max-h-[30vh] md:max-h-[35vh] pr-2">
                {project.description}
              </p>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  download
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-semibold uppercase tracking-widest text-[#0C0C0C] whitespace-nowrap transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-98 w-full sm:w-auto shadow-lg shadow-white/5"
                >
                  <Download size={18} />
                  Download APK
                </a>
              )}
              {project.githubUrl ? (
                <>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-semibold uppercase tracking-widest text-[#0C0C0C] whitespace-nowrap transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-98 w-full sm:w-auto shadow-lg shadow-white/5"
                  >
                    Live Project
                  </a>
                  <LiveProjectButton label="DIVE DEEP" href={project.githubUrl} className="w-full sm:w-auto" />
                </>
              ) : (
                <LiveProjectButton label={project.name === 'SecureCity' ? 'DIVE DEEP' : 'Live Project'} href={project.liveUrl} className="w-full sm:w-auto" />
              )}
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="w-full md:h-full flex items-center justify-center min-h-0 overflow-visible md:overflow-hidden py-4 md:py-0">
            {project.name === 'SecureCity' ? (
              <div className="flex flex-row gap-1.5 sm:gap-3.5 h-full max-h-[35vh] sm:max-h-[45vh] md:max-h-[55vh] lg:max-h-[60vh] justify-center items-center w-full px-0.5 sm:px-0">
                <img src={project.col1Image1} alt="SecureCity 1" className="w-[31%] sm:w-auto h-auto sm:h-full max-h-[28vh] sm:max-h-[40vh] md:max-h-[50vh] lg:max-h-[55vh] object-contain rounded-lg sm:rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex-shrink-0 sm:flex-shrink" />
                <img src={project.col1Image2} alt="SecureCity 2" className="w-[31%] sm:w-auto h-auto sm:h-full max-h-[28vh] sm:max-h-[40vh] md:max-h-[50vh] lg:max-h-[55vh] object-contain rounded-lg sm:rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex-shrink-0 sm:flex-shrink" />
                <img src={project.col2Image} alt="SecureCity 3" className="w-[31%] sm:w-auto h-auto sm:h-full max-h-[28vh] sm:max-h-[40vh] md:max-h-[50vh] lg:max-h-[55vh] object-contain rounded-lg sm:rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex-shrink-0 sm:flex-shrink" />
              </div>
            ) : images.length > 1 ? (
              <div className="flex flex-col items-center justify-center w-full h-full max-h-[40vh] md:max-h-[55vh] lg:max-h-[60vh] gap-3">
                <div className="w-full flex-1 flex items-center justify-center min-h-0">
                  <img
                    src={images[activeImgIndex]}
                    alt={`${project.name} Screenshot ${activeImgIndex + 1}`}
                    className="max-w-full max-h-[30vh] md:max-h-[42vh] lg:max-h-[46vh] w-auto object-contain rounded-xl sm:rounded-2xl border border-white/10 shadow-xl transition-all duration-300"
                  />
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center pt-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        activeImgIndex === idx
                          ? 'border-[#D7E2EA] scale-105 shadow-md shadow-white/10 opacity-100'
                          : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="h-10 sm:h-12 w-16 sm:w-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-full max-h-[40vh] md:max-h-[55vh] lg:max-h-[60vh] flex items-center justify-center">
                <img
                  src={project.col1Image1}
                  alt={`${project.name} Dashboard`}
                  className="max-w-full max-h-[35vh] md:max-h-[50vh] lg:max-h-[55vh] w-auto object-contain rounded-xl sm:rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
