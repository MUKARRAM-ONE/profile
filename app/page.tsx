import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Education from "./components/education"
import ExtraCurricular from "./components/extra-curricular"
import Image from "next/image"
import { ResumeButton } from "./components/resume-button"
import { ThemeToggle } from "./components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#education" className="transition-colors hover:text-foreground/80">
              Education
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <ResumeButton />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-slide-up">
                MUKARRAM RAZZAQ
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Aspiring Software Developer | Java | TypeScript | HTML | CSS | Next.js
              </p>
              <div className="flex flex-col items-center space-y-2 mt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <p className="text-gray-500">Askari # 1, Clifton Karachi</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <p className="text-gray-500">+92 315 6395517</p>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="https://github.com/MUKARRAM-ONE" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/mukarram-razzaq/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:mukrram2003@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 animate-slide-up">Objective</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              To get knowledge and experience in a business competitive environment and obtain a higher position in a
              well-reputed organization that actively promotes personal professional growth. Enthusiastic software
              engineering student with a strong foundation in Java and a keen interest in web development. Seeking an
              internship opportunity to apply and expand my skills in a dynamic software house environment.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-500 dark:text-gray-400">
                <span className="font-medium">FRESH/NO EXPERIENCE</span>
                <br />
                Aspiring Software Developer — Although I am new to the field of software development, I am committed
                to learning and growing in this industry. My current focus is on building a strong foundation in key
                programming languages like Java, TypeScript, HTML, and CSS, and I am eager to apply my skills in a
                professional setting through an internship opportunity.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center animate-slide-up">
              Education
            </h2>
            <Education />
          </div>
        </section>

        <section id="skills" className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center animate-slide-up">
              Technical Skills
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="projects" className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center animate-slide-up">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="TypeScript"
                description="Currently building a solid understanding of TypeScript, focusing on its fundamental concepts such as types, interfaces, and basic syntax, and eager to apply this knowledge to real-world projects."
                image="/typescript-project.png"
                link="#"
                tags={["TypeScript", "Web Development"]}
              />
              <ProjectCard
                title="Java Currency Converter"
                description="Developed a basic currency converter application using Java, designed to convert predefined currency values (e.g., USD to EUR) without fetching real-time data. This project helped solidify my understanding of Java fundamentals."
                image="/java-project.png"
                link="#"
                tags={["Java", "OOP", "Desktop Application"]}
              />
              <ProjectCard
                title="Portfolio Website"
                description="Created a neutral and responsive portfolio website using HTML and CSS, allowing users to easily input and display their personal information in a structured format."
                image="/portfolio-project.png"
                link="#"
                tags={["HTML", "CSS", "Responsive Design"]}
              />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center animate-slide-up">
              Soft Skills & Qualities
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-center">Soft Skills</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>Proficient with Workday</li>
                  <li>Team player</li>
                  <li>Excellent time management skills</li>
                  <li>Conflict Management</li>
                  <li>Public Speaking</li>
                  <li>Team Work</li>
                  <li>Leadership</li>
                  <li>Creativity</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-center">Qualities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>A cooperative and active team worker</li>
                  <li>Can work in challenging circumstances</li>
                  <li>Self-motivated and optimistic thinker</li>
                  <li>Ability to deal with people successfully</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center animate-slide-up">
              Extra-Curricular Activities
            </h2>
            <ExtraCurricular />
          </div>
        </section>

        <section id="contact" className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center animate-slide-up">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t mt-auto">
        <div className="container flex flex-col items-center justify-center py-6 w-full shrink-0 px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            © 2024 Mukarram Razzaq. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
