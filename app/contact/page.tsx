import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <section className="py-12">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-100 mb-12 max-w-2xl">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <a 
            href="https://github.com/MUKARRAM-ONE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 border rounded-lg hover:border-blue-500 hover:shadow-lg transition-all dark:border-gray-700"
          >
            <div className="text-3xl mb-3">🐙</div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">@MUKARRAM-ONE</p>
            <button className="px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Connect
            </button>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/mukarram-razzaq-0146572ba/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 border rounded-lg hover:border-blue-500 hover:shadow-lg transition-all dark:border-gray-700"
          >
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">/in/mukarram-razzaq</p>
            <button className="px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Connect
            </button>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:mukrram2003@gmail.com?subject=Hi%20Mukarram"
            className="p-6 border rounded-lg hover:border-blue-500 hover:shadow-lg transition-all dark:border-gray-700"
          >
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">mukrram2003@gmail.com</p>
            <button className="px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Connect
            </button>
          </a>
        </div>
        {/* Contact form */}
        <ContactForm />
      </div>
    </section>
  );
}