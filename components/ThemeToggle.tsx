'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const [dark, setDark] = useState<boolean>(false);
	const [mounted, setMounted] = useState<boolean>(false);

	// On mount, read saved preference or system preference
	useEffect(() => {
		if (typeof window === 'undefined') return;
		try {
			const saved = localStorage.getItem('theme');
			console.debug('[ThemeToggle] saved theme:', saved);
			if (saved) {
				// schedule state update to avoid synchronous setState in effect
				setTimeout(() => setDark(saved === 'dark'));
			} else if (window.matchMedia) {
				const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
				console.debug('[ThemeToggle] prefers-color-scheme dark:', prefers);
				setTimeout(() => setDark(prefers));
			}
		} catch {
			// ignore
		}
		// mark mounted after scheduling updates
		setTimeout(() => setMounted(true));
	}, []);

	// Apply class and persist when dark changes after mount
	useEffect(() => {
		if (!mounted) return;
		document.documentElement.classList.toggle('dark', dark);
		console.debug('[ThemeToggle] applied dark:', dark, 'html.classList:', document.documentElement.className);
		try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { }
	}, [dark, mounted]);

	// Avoid hydration mismatch by not rendering interactive button until mounted
	if (!mounted) return <button className="px-2 py-1 border rounded opacity-0" aria-hidden="true" />;

		const handleClick = () => {
			const next = !dark;
			try {
				// immediate DOM update for instant feedback
				document.documentElement.classList.toggle('dark', next);
				localStorage.setItem('theme', next ? 'dark' : 'light');
			} catch {
				// ignore
			}
			setDark(next);
		};

		return (
			<button
				onClick={handleClick}
				className="px-2 py-1 border rounded"
				aria-pressed={dark}
				title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{dark ? '🌙' : '☀️'}
			</button>
		);
}