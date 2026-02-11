# Mukarram Razzaq - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4. Features a clean, professional design with dark mode support, showcasing projects, blog posts, and professional information.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript 5
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Dark Mode**: Seamless theme switching with persistent preferences
- **Dynamic Routing**: Blog posts and project detail pages with dynamic routes
- **Smooth Animations**: Scroll-based reveal animations for enhanced UX
- **SEO Optimized**: Metadata configuration for better search engine visibility
- **Contact Form**: Integrated contact form for direct communication
- **Education Timeline**: Interactive education history display

## 📦 Tech Stack

- **Framework**: Next.js 16.0.3
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Build Tool**: Turbopack (Next.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MUKARRAM-ONE/profile.git
   cd mukarramrazzaq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
mukarramrazzaq/
├── app/
│   ├── blog/              # Blog listing and detail pages
│   ├── contact/           # Contact page
│   ├── education/         # Education timeline page
│   ├── portfolio/         # Portfolio listing and project details
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── ContactForm.tsx    # Contact form component
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Navigation header
│   ├── PostCard.tsx       # Blog post card
│   ├── ProjectCard.tsx    # Project card
│   ├── ScrollReveal.tsx   # Animation component
│   └── ThemeToggle.tsx    # Dark mode toggle
├── data/
│   ├── posts.ts           # Blog posts data
│   └── projects.ts        # Projects data
└── public/
    └── Mukarram_Razzaq_resume.pdf  # Resume file
```

## 🎨 Customization

### Adding New Projects
Edit `data/projects.ts` to add or modify projects:

```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  description: 'Brief description',
  fullDescription: 'Detailed description',
  tags: ['Tag1', 'Tag2'],
  githubUrl: 'https://github.com/...',
  // ... more fields
}
```

### Adding Blog Posts
Edit `data/posts.ts` to add or modify blog posts:

```typescript
{
  slug: 'post-slug',
  title: 'Post Title',
  excerpt: 'Brief summary',
  date: 'Month Day, Year',
  // ... more fields
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Add custom domain in Vercel dashboard settings

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mukarram Razzaq**
- Website: [mukarramrazzaq.me](https://mukarramrazzaq.me)
- LinkedIn: [/in/mukarram-razzaq](https://linkedin.com/in/mukarram-razzaq)
- GitHub: [@MUKARRAM-ONE](https://github.com/MUKARRAM-ONE)
- Email: mukarramrazzaq440@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ using Next.js and TypeScript
