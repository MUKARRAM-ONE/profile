export default function Footer() {
return (
<footer className="border-t py-4 mt-12 bg-black text-white dark:bg-black">
<div className="container flex items-center justify-between text-sm">
<div className="flex items-center gap-6">
<p className="text-gray-400">© {new Date().getFullYear()} Mukarram Razzaq. All rights reserved. | </p>
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
<p className="text-white">Available for hire</p>
</div>
</div>
<div className="flex items-center gap-4">
<a 
href="https://github.com/MUKARRAM-ONE" 
target="_blank" 
rel="noopener noreferrer"
className="text-gray-400 hover:text-white transition text-lg"
title="GitHub"
>
🐙
</a>
<a 
href="https://www.linkedin.com/in/mukarram-razzaq-0146572ba/" 
target="_blank" 
rel="noopener noreferrer"
className="text-gray-400 hover:text-white transition text-lg"
title="LinkedIn"
>
💼
</a>
</div>
</div>
</footer>
);
}