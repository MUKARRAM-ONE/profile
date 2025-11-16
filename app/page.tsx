import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text & CTAs */}
            <div className="animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">Hi, I&apos;m Mukarram Razzaq</h1>
              <p className="text-lg text-gray-700 dark:text-gray-100 mb-6">
                Full-stack developer with expertise in AI, cloud computing, and modern web applications. 
                I build robust, user-centric applications and am advancing my expertise with cutting-edge technologies.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <a href="/portfolio" className="px-8 py-4 rounded-md  text-white font-large hover:bg-black transition inline-block text-center transform hover:scale-105 hover:shadow-lg">
                  View My Work →
                </a>
                <a href="/contact" className="px-6 py-3 rounded-md border border-gray-400 dark:border-gray-600 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition inline-block text-center transform hover:scale-105">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right: Profile Image (hover zoom effect) */}
            <div className="flex justify-center md:justify-end animate-slideInRight">
              {/* outer: fixed size, rounded and overflow-hidden keeps layout stable */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float group overflow-hidden rounded-full">
                {/* inner: scales on hover (group-hover) */}
                <div className="relative w-full h-full transition-transform duration-300 ease-out transform group-hover:scale-110">
                  <Image
                    src="/profile.jpg"
                    alt="Mukarram Razzaq Profile"
                    fill
                    className="rounded-full object-cover shadow-lg animate-glow"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20" id="what-i-do">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 scroll-fade-in text-gray-900 dark:text-white">What I Do</h2>
          <p className="text-center text-gray-800 dark:text-gray-200 mb-12 max-w-2xl mx-auto scroll-fade-in">
            I specialise in building full-stack applications. Here are a few things I&apos;m passionate about.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/portfolio" className="p-6 border rounded-lg dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl transition cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 card-hover scroll-scale-in">
              <div className="text-4xl mb-4 inline-block transform hover:scale-125 transition">🎯</div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Portfolio</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Explore my projects and case studies. From simple websites to complex web applications, I enjoy tackling challenges and building useful products.
              </p>
            </a>
            <a href="/blog" className="p-6 border rounded-lg dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl transition cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 card-hover scroll-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl mb-4 inline-block transform hover:scale-125 transition">✍️</div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Blog</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Read my thoughts on tech and development. I write about things I&apos;m learning, tutorials, and my journey as a developer.
              </p>
            </a>
          </div>
        </div>
      </section>


      {/* My Journey Timeline */}
      <section className="py-20 relative" id="my-journey">
        <div className="absolute inset-0 opacity-3 bg-gradient-cyber"></div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 scroll-fade-in neon-text">My Journey</h2>
          <div className="space-y-8 max-w-2xl">
            {/* Timeline Item 1 */}
            <div className="flex gap-4 scroll-slide-left">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full mt-1.5 animate-glow border-2 border-blue-500"></div>
                <div className="w-1 h-24 bg-gradient-to-b from-blue-400 to-purple-500 mt-2"></div>
              </div>
              <div className="p-4 rounded-lg backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/50 transition">
                <p className="text-sm text-gray-600 dark:text-gray-400">2023 - Present</p>
                <h3 className="text-lg font-semibold gradient-text">Full-Stack Developer</h3>
                <p className="text-gray-700 dark:text-gray-300">Building scalable web applications with Next.js, React, and cloud technologies. Focused on AI integration and system design.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-4 scroll-slide-right" style={{animationDelay: '0.1s'}}>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full mt-1.5 animate-glow border-2 border-purple-500"></div>
                <div className="w-1 h-24 bg-gradient-to-b from-purple-400 to-pink-500 mt-2"></div>
              </div>
              <div className="p-4 rounded-lg backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/50 transition">
                <p className="text-sm text-gray-600 dark:text-gray-400">2022 - 2023</p>
                <h3 className="text-lg font-semibold gradient-text">Junior Developer</h3>
                <p className="text-gray-700 dark:text-gray-300">Started my journey in web development. Learned TypeScript, React, and backend development with Node.js.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-4 scroll-slide-left" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full mt-1.5 animate-glow border-2 border-cyan-500"></div>
                <div className="w-1 h-24 bg-gradient-to-b from-cyan-400 to-blue-500 mt-2"></div>
              </div>
              <div className="p-4 rounded-lg backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 transition">
                <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2022</p>
                <h3 className="text-lg font-semibold gradient-text">Computer Science Education</h3>
                <p className="text-gray-700 dark:text-gray-300">Completed studies in computer science fundamentals, algorithms, and data structures. Built strong foundation in software engineering.</p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-4 scroll-slide-right" style={{animationDelay: '0.3s'}}>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full mt-1.5 animate-glow border-2 border-violet-500"></div>
              </div>
              <div className="p-4 rounded-lg backdrop-blur-xl border border-violet-500/20 hover:border-violet-500/50 transition">
                <p className="text-sm text-gray-600 dark:text-gray-400">2020</p>
                <h3 className="text-lg font-semibold gradient-text">Started Learning Programming</h3>
                <p className="text-gray-700 dark:text-gray-300">Began the journey into software development with Python and web basics. Self-taught and determined to build amazing applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}