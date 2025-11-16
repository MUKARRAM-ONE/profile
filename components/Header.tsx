'use client';
import Link from 'next/link';
// using CSS background to crop and center the logo so only middle 'MR' shows
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';


export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="sticky top-0 z-40 navbar-bg">
			<div className="container py-4 flex items-center justify-between">
				{/* Left: logo */}
				<div className="flex items-center gap-4">
					<Link href="/" className="flex items-center gap-2 group">
						{/* outer box keeps layout stable; inner box scales on hover */}
						<div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-lg shadow-md">
							<div
								className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-300 ease-out transform group-hover:scale-110"
								style={{ backgroundImage: `url('/logo.jpg')` }}
								aria-hidden={false}
							/>
						</div>
						<span className="font-bold text-lg hidden sm:inline bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mukarram Razzaq</span>
					</Link>
				</div>

				{/* Center: main nav (centered) */}
				<nav className="hidden md:flex flex-1 justify-center gap-6">
					<Link href="/" className="nav-link">Home</Link>
					<Link href="/portfolio" className="nav-link">Portfolio</Link>
					<Link href="/blog" className="nav-link">Blog</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
				</nav>

				{/* Right area */}
				<div className="flex items-center gap-3">
					{/* Resume visible on md+ */}
					<a href="/Resume-Mukarram-Razzaq.pdf" className="nav-button hidden md:inline-block">Resume</a>
					<div className="hidden md:inline-flex">
						<ThemeToggle />
					</div>

					{/* Mobile menu button */}
					<button
						aria-label="Menu"
						aria-expanded={open}
						onClick={() => setOpen(v => !v)}
						className="md:hidden hamburger-btn"
					>
						{open ? '✕' : '☰'}
					</button>
				</div>
			</div>

			{/* Mobile nav */}
			<nav className={`${open ? 'block' : 'hidden'} md:hidden mobile-nav-bg border-t border-blue-200/30 dark:border-blue-800/30`}>
				<div className="container py-4 flex flex-col gap-2">
					<Link href="/#what-i-do" className="nav-link" onClick={() => setOpen(false)}>About</Link>
					<Link href="/portfolio" className="nav-link" onClick={() => setOpen(false)}>Portfolio</Link>
					<Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>Blog</Link>
					<Link href="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link>
					<a href="/Resume-Mukarram-Razzaq.pdf" className="nav-button text-center mt-2">Resume</a>
					<div className="pt-3 border-t border-blue-200/30 dark:border-blue-800/30">
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
}