'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FileDown, Menu, X } from 'lucide-react';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	// Prevent scroll when mobile menu is open
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [open]);

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Portfolio', href: '/portfolio' },
		{ name: 'Education', href: '/education' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
			<div className={`absolute inset-0 transition-all duration-300 ${scrolled ? 'navbar-bg shadow-sm' : 'bg-transparent'}`} />
			
			<div className="container flex items-center justify-between relative">
				{/* Left: logo */}
				<div className="flex items-center gap-4">
					<Link href="/" className="flex items-center gap-3 group">
						<div className="w-10 h-10 sm:w-11 sm:h-11 overflow-hidden rounded-xl shadow-lg ring-2 ring-blue-500/10 group-hover:ring-blue-500/30 transition-all duration-300">
							<div
								className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-500 ease-out transform group-hover:scale-110"
								style={{ backgroundImage: `url('/logo.jpg')` }}
								aria-hidden={false}
							/>
						</div>
						<span className="font-bold text-lg hidden sm:inline-block tracking-tight">
							Mukarram <span className="text-blue-600 dark:text-blue-400">Razzaq</span>
						</span>
					</Link>
				</div>

				{/* Center: Desktop Nav */}
				<nav className="hidden md:flex items-center gap-2">
					{navLinks.map((link) => (
						<Link 
							key={link.name} 
							href={link.href} 
							className={`
								nav-link px-4 py-2 text-sm font-medium
								${pathname === link.href 
									? 'text-blue-600 dark:text-blue-400' 
									: 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}
							`}
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Right area */}
				<div className="flex items-center gap-3">
					<a 
						href="/Mukarram_Razzaq_resume.pdf" 
						className="btn-primary py-2 px-4 text-sm hidden lg:flex items-center gap-2"
					>
						<FileDown size={16} />
						Resume
					</a>
					<div className="hidden md:inline-flex">
						<ThemeToggle />
					</div>

					{/* Mobile menu toggle */}
					<button
						aria-label="Toggle Menu"
						onClick={() => setOpen(!open)}
						className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
					>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile Overlay Navigation */}
			<div className={`
				fixed inset-0 top-[60px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-50 transition-all duration-500 ease-in-out md:hidden
				${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
			`}>
				<nav className="container py-12 flex flex-col gap-6">
					{navLinks.map((link, i) => (
						<Link 
							key={link.name} 
							href={link.href}
							onClick={() => setOpen(false)}
							className={`
								text-3xl font-bold transition-all duration-300
								${pathname === link.href 
									? 'text-blue-600 dark:text-blue-400 translate-x-2' 
									: 'text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white'}
							`}
							style={{ transitionDelay: `${i * 50}ms` }}
						>
							{link.name}
						</Link>
					))}
					<div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-8">
						<div className="flex items-center justify-between">
							<span className="font-semibold text-slate-500">Appearance</span>
							<ThemeToggle />
						</div>
						<a 
							href="/Mukarram_Razzaq_resume.pdf" 
							className="btn-primary py-4 text-center text-lg flex justify-center items-center gap-2"
							onClick={() => setOpen(false)}
						>
							<FileDown size={20} />
							Download Resume
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}