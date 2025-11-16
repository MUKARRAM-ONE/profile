export type Post = {
slug: string;
title: string;
excerpt: string;
content: string; // simple HTML or markdown rendered as dangerouslySetInnerHTML for demo
date: string;
tags?: string[];
};


export const posts: Post[] = [
{
slug: 'mastering-server-components',
title: 'Mastering Server Components',
excerpt: 'Server Components are a powerful Next.js feature — this post explains when and how to use them.',
content: `<p>Server Components allow you to move data fetching and rendering to the server, reducing client bundle size and improving performance. Use them for content-heavy pages where interactivity is minimal.</p><h3>When to use</h3><ul><li>Static content</li><li>SEO pages</li></ul>`,
date: '2025-05-10',
tags: ['React', 'Next.js', 'Web Development']
},
{
slug: 'ai-driven-development-wsl',
title: 'AI-driven Development using WSL & Cloud',
excerpt: 'How I use WSL + cloud tools to build AI-driven workflows and cloud-native apps.',
content: `<p>I develop locally on WSL with Linux-native toolchains and push CI/CD to cloud providers. Key tools: Docker, GitHub Actions, and cloud GPUs.</p>`,
date: '2025-09-01',
tags: ['Cloud', 'AI', 'DevOps', 'WSL']
},
{
slug: 'typescript-best-practices',
title: 'TypeScript Best Practices for Production',
excerpt: 'Learn essential TypeScript patterns and practices for building scalable, maintainable applications.',
content: `<p>TypeScript is powerful when used correctly. In this post, we explore type narrowing, generics, utility types, and common pitfalls to avoid when building production systems.</p><h3>Key Topics</h3><ul><li>Type Guards</li><li>Generics</li><li>Utility Types</li><li>Module Resolution</li></ul>`,
date: '2025-03-15',
tags: ['TypeScript', 'Web Development', 'Best Practices']
}
];