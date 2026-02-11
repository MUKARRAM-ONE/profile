import ContactForm from '../../components/ContactForm';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 reveal reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Send size={14} />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Let&apos;s Start a <span className="text-blue-600">Conversation</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Reach out through any of these channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* GitHub Card */}
          <a 
            href="https://github.com/MUKARRAM-ONE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="reveal reveal-left group p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Github size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">@MUKARRAM-ONE</p>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
              Follow me
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/mukarram-razzaq-0146572ba/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="reveal reveal-up group p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Linkedin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">/in/mukarram-razzaq</p>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
              Let&apos;s connect
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:mukrram2003@gmail.com?subject=Hi%20Mukarram"
            className="reveal reveal-right group p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">mukrram2003@gmail.com</p>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
              Send an email
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="reveal reveal-up mt-12 pt-12 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-blue-600" />
                Direct Message
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Fill out the form and I&apos;ll get back to you as soon as possible. I usually respond within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Timezone</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-200">Karachi, Pakistan (GMT+5)</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}