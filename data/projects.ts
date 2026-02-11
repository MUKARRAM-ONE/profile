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
slug: 'azure-disaster-response',
title: 'Azure Disaster Response System',
short: 'Cloud-based disaster response application using Azure services.',
long: `Designed, developed, and deployed a cloud-based disaster response application using Microsoft Azure. Built and hosted the application using Azure Static Web Apps, Azure Functions, CosmosDB (CoreSQL), Auth0, JWT, and Bycript hashing. It demonstrates practical understanding of cloud computing concepts, scalability considerations, and real-world deployment workflows.`,
tags: ['Azure', 'Node.js', 'CosmosDB', 'Auth0', 'Cloud'],
link: 'https://blue-sand-0cbf47300.1.azurestaticapps.net/',
date: '2024-12-01'
},
{
slug: 'skintelli-ai-healthcare',
title: 'Skintelli (AI Healthcare Project)',
short: 'AI-driven skin disease analysis platform.',
long: `Contributed as an open-source collaborator to Skintelli, an AI-driven skin disease analysis platform. Actively participated in collaborative development by working on Python-based components and improving integration of machine learning logic within the application.`,
tags: ['Python', 'AI', 'Healthcare', 'Machine Learning'],
link: 'https://github.com/MUKARRAM-ONE/Skintelli',
date: '2025-01-15'
},
{
slug: 'facial-emotion-recognition',
title: 'Facial Emotion & Gender Recognition',
short: 'Real-time facial analysis system using CNNs and OpenCV.',
long: `Developed a real-time Facial Emotion and Gender Detection system using Convolutional Neural Networks (CNNs) and OpenCV. Trained the model in Google Colab with TensorFlow and PyTorch, achieving high accuracy through best-epoch selection and data preprocessing. Integrated a Streamlit-based interface for webcam and image-based predictions.`,
tags: ['Python', 'CNN', 'OpenCV', 'TensorFlow', 'Streamlit'],
link: '#',
date: '2024-11-10'
},
{
slug: 'ai-spec-driven-development',
title: 'AI Spec-Driven Development',
short: 'AI-driven software development workflow (Hackathon Project).',
long: `Developed a fully AI-driven software development workflow that converts natural language specifications into structured documentation, tasks, and implementation plans. Built an automated system using Spec-Kit Plus commands to generate modules, chapter specifications, project plans, and a complete Docusaurus documentation site.`,
tags: ['AI', 'Automation', 'Spec-Kit Plus', 'Docusaurus'],
link: '#',
date: '2025-02-01'
},
{
slug: 'ocr-document-analysis',
title: 'OCR-Based Document Analysis',
short: 'Multilingual OCR system using Python and PyTorch.',
long: `Developed a multilingual OCR system using Python and PyTorch that performs document layout analysis and extracts text with high accuracy. Conducted experiments and visualizations in a Google Colab notebook, demonstrating end-to-end OCR pipeline capabilities and performance evaluation.`,
tags: ['Python', 'PyTorch', 'OCR', 'Computer Vision'],
link: '#',
date: '2024-09-20'
},
{
slug: 'portfolio-website',
title: 'Portfolio Website',
short: 'Next.js + TypeScript + Tailwind portfolio site.',
long: `A fast, accessible portfolio built with Next.js App Router, TypeScript and Tailwind. Focus on SEO, minimalism and performance. Includes project pages and blog posts authored in a small data layer.`,
tags: ['Next.js','TypeScript','Tailwind'],
link: 'https://www.mukarramrazzaq.me/',
date: '2025-06-01'
}
];