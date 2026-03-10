import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Terminal,
  ChevronRight,
  Cpu
} from 'lucide-react';
import { CV_DATA } from './constants';

export default function App() {
  const currentYear = new Date().getFullYear();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Grid Background Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <main className="relative max-w-5xl mx-auto px-6 py-12 lg:py-24">
        
        {/* Header / Hero Section */}
        <header className="mb-20">
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tighter mb-2 uppercase">
                  {CV_DATA.name}
                </h1>
                <div className="flex items-center gap-3 text-emerald-500 font-mono text-sm md:text-base">
                  <Terminal className="w-4 h-4" />
                  <span className="animate-pulse">_</span>
                  <span>{CV_DATA.role}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href={CV_DATA.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-emerald-500 transition-colors border border-zinc-800 rounded-lg bg-zinc-900/50">
                  <Github className="w-5 h-5" />
                </a>
                <a href={CV_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-emerald-500 transition-colors border border-zinc-800 rounded-lg bg-zinc-900/50">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${CV_DATA.email}`} className="p-2 hover:text-emerald-500 transition-colors border border-zinc-800 rounded-lg bg-zinc-900/50">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <p className="text-lg leading-relaxed text-zinc-400 max-w-2xl">
                  {CV_DATA.summary}
                </p>
              </div>
              <div className="space-y-3 font-mono text-xs border-l border-zinc-800 pl-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-zinc-600" />
                  <span>{CV_DATA.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-zinc-600" />
                  <span>{CV_DATA.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-3 h-3 text-zinc-600" />
                  <span>Status: {CV_DATA.militaryStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Experience & Education */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Experience Section */}
            <section id="experience">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <Briefcase className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-xl font-mono font-bold tracking-tight text-zinc-100 uppercase italic">
                  Work Experience
                </h2>
                <div className="h-[1px] flex-grow bg-zinc-800 ml-4"></div>
              </div>

              <div className="space-y-12">
                {CV_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-zinc-800 group">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-emerald-500 transition-colors"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-mono text-zinc-500">{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                          {exp.period}
                        </span>
                        <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-3 text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-xl font-mono font-bold tracking-tight text-zinc-100 uppercase italic">
                  Education
                </h2>
                <div className="h-[1px] flex-grow bg-zinc-800 ml-4"></div>
              </div>

              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">{CV_DATA.education.school}</h3>
                    <p className="text-emerald-500 font-mono text-sm">{CV_DATA.education.degree}</p>
                    <p className="text-sm mt-2 text-zinc-500">{CV_DATA.education.details}</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <p className="text-zinc-300">{CV_DATA.education.period}</p>
                    <p className="text-zinc-600 mt-1">{CV_DATA.education.location}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Skills & Meta */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Skills Section */}
            <section id="skills" className="sticky top-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <Code2 className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-xl font-mono font-bold tracking-tight text-zinc-100 uppercase italic">
                  Tech Stack
                </h2>
                <div className="h-[1px] flex-grow bg-zinc-800 ml-4"></div>
              </div>

              <div className="flex flex-wrap gap-2">
                {CV_DATA.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-mono bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-md hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-12 p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Availability</h4>
                  <p className="text-sm text-zinc-300">Open to senior opportunities and architectural challenges.</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Contact</h4>
                  <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-2 text-sm text-emerald-500 hover:underline">
                    <Mail className="w-4 h-4" />
                    {CV_DATA.email}
                  </a>
                </div>

                <button onClick={handlePrint} className="w-full py-3 px-4 bg-zinc-100 text-zinc-900 font-bold rounded-lg hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2 text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Download Resume (PDF)
                </button>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-zinc-600">
          <p>© {currentYear} ABDULLAH AMR MOHAMED. BUILT WITH REACT & TAILWIND.</p>
          <div className="flex gap-6">
            <a href={CV_DATA.github} className="hover:text-emerald-500 transition-colors">GITHUB</a>
            <a href={CV_DATA.linkedin} className="hover:text-emerald-500 transition-colors">LINKEDIN</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
