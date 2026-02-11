import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code2, BrainCircuit, Cloud, Cpu, Rocket, GraduationCap, Briefcase, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text & CTAs */}
            <div className="animate-slideInLeft">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Rocket size={14} />
                <span>Available for New Opportunities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                Hi, I&apos;m <span className="gradient-text">Mukarram Razzaq</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
                A passionate <span className="font-semibold text-slate-900 dark:text-white">Full-Stack Developer</span> focused on building AI-driven, cloud-native applications. I turn complex problems into elegant, scalable solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio" className="btn-primary flex items-center gap-2">
                  View My Work
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slideInRight">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition duration-500" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                  <div className="relative w-full h-full rounded-full p-2 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800">
                    <Image
                      src="/profile.jpg"
                      alt="Mukarram Razzaq Profile"
                      fill
                      className="rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                  {/* Floating tags */}
                  <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                    <Code2 className="text-blue-500" size={24} />
                  </div>
                  <div className="absolute bottom-4 -left-6 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <BrainCircuit className="text-purple-500" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors" id="what-i-do">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal reveal-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Expertise & <span className="text-blue-600">Services</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              I specialize in bridging the gap between sophisticated AI models and scalable cloud infrastructure to deliver seamless user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="reveal reveal-up p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 card-hover shadow-sm">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Cloud size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Computing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Architecting serverless, microservices, and containerized environments for maximum scalability and reliability.
              </p>
            </div>
            <div className="reveal reveal-up p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 card-hover shadow-sm" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Integration</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Leveraging LLMs and machine learning pipelines to build intelligent, automation-first applications.
              </p>
            </div>
            <div className="reveal reveal-up p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 card-hover shadow-sm" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                <Code2 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Stack Dev</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Building high-performance web platforms using Next.js, TypeScript, and modern ecosystem tools.
              </p>
            </div>
          </div>

          {/* Technical Skills Sub-section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-10 reveal reveal-up flex items-center gap-3">
              <Cpu className="text-blue-600" />
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="reveal reveal-left p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <h4 className="font-bold mb-6 text-blue-600 uppercase tracking-widest text-xs">Core Programming</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'TypeScript', 'HTML', 'CSS'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-medium hover:border-blue-500/50 transition-colors">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-up p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <h4 className="font-bold mb-6 text-purple-600 uppercase tracking-widest text-xs">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-Learn', 'LLMs'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-medium hover:border-purple-500/50 transition-colors">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-right p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <h4 className="font-bold mb-6 text-cyan-600 uppercase tracking-widest text-xs">Frameworks & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Docker', 'Azure', 'FastAPI', 'Node.js', 'Git'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-medium hover:border-cyan-500/50 transition-colors">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Timeline */}
      <section className="py-24 relative overflow-hidden" id="my-journey">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 reveal reveal-left sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The <span className="text-purple-600">Journey</span></h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                A timeline of my professional growth, academic achievements, and the evolution of my technical expertise.
              </p>
              <div className="flex items-center gap-4 p-4 bg-purple-500/5 border border-purple-500/10 rounded-2xl">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg">3+ Years</div>
                  <div className="text-sm text-slate-500">Coding Experience</div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {/* Timeline Items */}
              {[
                {
                  date: 'June 2025 - Aug 2025',
                  title: 'Machine Learning Intern',
                  company: 'Arch Technologies',
                  desc: 'Focused on developing and testing ML pipelines, data analysis, and predictive modeling using Python, Scikit-Learn, and TensorFlow.',
                  icon: <BrainCircuit size={16} />,
                  color: 'blue'
                },
                {
                  date: '2025',
                  title: 'IT Specialist: Python',
                  company: 'Pearson Certified',
                  desc: 'Achieved professional certification in Python, demonstrating proficiency in core programming, AI, and data-driven applications.',
                  icon: <Cpu size={16} />,
                  color: 'purple'
                },
                {
                  date: 'Feb 2023 - Present',
                  title: 'BS in Software Engineering',
                  company: 'IQRA University',
                  desc: 'Currently pursuing software engineering degree with a 3.34 CGPA. Mastered fundamentals in algorithms, data structures, and AI SDKs.',
                  icon: <GraduationCap size={16} />,
                  color: 'cyan'
                },
                {
                  date: '2020 - 2022',
                  title: 'Self-Taught Journey',
                  company: 'Independant Study',
                  desc: 'Began exploring Python, computer vision, and web technologies. Built a strong foundation in problem-solving and modern developer tools.',
                  icon: <Rocket size={16} />,
                  color: 'orange'
                }
              ].map((item, i) => (
                <div key={i} className="relative pl-10 reveal reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center z-10 transition-colors group-hover:border-${item.color}-500`}>
                    <div className={`w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600`} />
                  </div>
                  <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <div className="text-sm font-semibold text-slate-500 mb-4">{item.company}</div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-20">
        <div className="container">
          <div className="relative bg-blue-600 rounded-[3rem] p-12 overflow-hidden reveal reveal-scale text-center md:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Let&apos;s build something amazing together</h2>
                <p className="text-blue-100 text-lg max-w-xl">
                  Whether you have a specific project in mind or just want to chat about AI and cloud, I&apos;m always open to new connections.
                </p>
              </div>
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}