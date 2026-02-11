import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 mt-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight">Mukarram <span className="text-blue-600 dark:text-blue-400">Razzaq</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
              Building the future with AI, Cloud, and modern web technologies.
            </p>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">Available for new projects</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/MUKARRAM-ONE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mukarram-razzaq-0146572ba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@mukarramrazzaq.me" 
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-400 text-xs font-medium">
              © {new Date().getFullYear()} Mukarram Razzaq. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}