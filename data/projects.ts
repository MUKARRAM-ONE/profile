export type Project = {
slug: string;
title: string;
short: string;
long: string;
tags: string[];
link?: string;
date?: string;
};


export const projects: Project[] = [
{
slug: 'stellar-sync',
title: 'Stellar Sync (example)',
short: 'A real-time sync service for distributed notes and metadata.',
long: `Stellar Sync is a distributed synchronization service built with TypeScript and WebSockets. It offers conflict-free replicated data types (CRDTs) for real-time collaboration, optimized for low-latency and offline-first workflows. Responsibilities: architectural design, TypeScript implementation, and performance tuning.`,
tags: ['TypeScript','Realtime','CRDT'],
link: '#',
date: '2024-10-01'
},
{
slug: 'portfolio-website',
title: 'Portfolio Website (this site)',
short: 'Next.js + TypeScript + Tailwind portfolio site.',
long: `A fast, accessible portfolio built with Next.js App Router, TypeScript and Tailwind. Focus on SEO, minimalism and performance. Includes project pages and blog posts authored in a small data layer.`,
tags: ['Next.js','TypeScript','Tailwind'],
link: 'https://www.mukarramrazzaq.me/',
date: '2025-06-01'
},
{
slug: 'quantum-cart',
title: 'QuantumCart E-Commerce Platform',
short: 'AI-powered e-commerce with personalized product recommendations.',
long: `QuantumCart is an intelligent e-commerce platform that uses machine learning to deliver personalized shopping experiences. Features include real-time inventory management, AI-driven recommendations, secure payment processing with Stripe, and an admin dashboard for order management. Built with React frontend, Node.js backend, and Python ML microservices.`,
tags: ['React', 'Node.js', 'Python', 'Machine Learning', 'Stripe'],
link: '#',
date: '2024-08-15'
},
{
slug: 'health-hub',
title: 'HealthHub - Fitness Tracking App',
short: 'Mobile app for fitness goals and trainer connections.',
long: `HealthHub is a cross-platform mobile application built with React Native that helps users track fitness goals, connect with certified trainers, and monitor progress through real-time data integration. Features include Firebase authentication, real-time workout updates, trainer messaging, and integration with Google Fit API and Apple HealthKit for comprehensive health tracking.`,
tags: ['React Native', 'Firebase', 'GraphQL', 'Google Fit API'],
link: '#',
date: '2024-06-20'
},
{
slug: 'cloudnative-analytics',
title: 'CloudNative Analytics Dashboard',
short: 'Real-time analytics platform for distributed cloud systems.',
long: `A scalable analytics dashboard for monitoring cloud infrastructure and application metrics in real-time. Built with Next.js for the frontend and Node.js microservices on the backend. Features include real-time data streaming with WebSockets, custom metrics visualization, alerting system, and integration with AWS CloudWatch and Prometheus for comprehensive system monitoring.`,
tags: ['Next.js', 'Node.js', 'AWS', 'Prometheus', 'Docker'],
link: '#',
date: '2024-05-10'
}
];