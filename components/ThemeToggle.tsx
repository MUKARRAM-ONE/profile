'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
	const [dark, setDark] = useState<boolean>(false);
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		try {
			const saved = localStorage.getItem('theme');
			if (saved) {
				setDark(saved === 'dark');
			} else if (window.matchMedia) {
				setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
			}
		} catch {
			// ignore
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		document.documentElement.classList.toggle('dark', dark);
		try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { }
	}, [dark, mounted]);

	if (!mounted) return <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />;

	return (
		<button
			onClick={() => setDark(!dark)}
			className={`
				p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10
				${dark 
					? 'bg-slate-800 text-amber-400 hover:bg-slate-700' 
					: 'bg-slate-100 text-blue-600 hover:bg-slate-200'}
			`}
			aria-pressed={dark}
			title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			<div className="relative w-5 h-5 flex items-center justify-center">
				{dark ? (
					<Moon size={20} className="animate-fadeInUp" />
				) : (
					<Sun size={20} className="animate-fadeInUp" />
				)}
			</div>
			<span className="sr-only">{dark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
		</button>
	);
}