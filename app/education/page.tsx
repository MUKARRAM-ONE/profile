import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, MapPin, Cpu } from 'lucide-react';

export default function Education() {
  const education = {
    degree: "Bachelor of Science in Software Engineering",
    institution: "IQRA University",
    location: "Karachi, Pakistan",
    period: "Feb 2023 - Present",
    cgpa: "3.34 / 4.00",
    courses: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Software Engineering",
      "Agentic AI & OpenAI SDK",
      "Cloud Computing",
      "Computer Vision",
      "Artificial Intelligence",
      "Discrete Structure",
      "Advance Python Programing",
      "Fuzzy Logics in AI",
      "Formal Methods"
    ]
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="max-w-3xl mb-16 reveal reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Education & <span className="text-blue-600">Learning</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            My academic journey is focused on mastering the fundamentals of software engineering while exploring the frontiers of AI and cloud technologies.
          </p>
        </div>
        
        <div className="reveal reveal-up p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{education.degree}</h2>
              <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="font-medium">{education.institution}, {education.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" />
                  <span className="font-medium">{education.period}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex flex-col items-center md:items-end px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Academic Standing</span>
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <BookOpen size={20} />
              </div>
              Core Specializations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {education.courses.map((course, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 rounded-2xl border border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-600 group-hover:scale-125 transition-all"></div>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal reveal-left p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                  <Award className="text-purple-600" />
                  Certifications
                </h3>
                <div className="group flex items-start gap-4 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                      <Cpu size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">IT Specialist: Python</h4>
                        <p className="text-sm text-slate-500 font-medium">Pearson Certified • 2025</p>
                    </div>
                </div>
            </div>
            <div className="reveal reveal-right p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" />
                  Professional Traits
                </h3>
                <div className="space-y-4">
                    {[
                      'Collaborative Team Player',
                      'Solution-Oriented Thinker',
                      'Adaptable & Fast Learner',
                      'Strong Technical Communicator'
                    ].map((q, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{q}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
