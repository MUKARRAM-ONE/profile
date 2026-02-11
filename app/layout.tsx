import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
	title: 'Mukarram Razzaq — Developer',
	description: 'Mukarram Razzaq — Full-stack developer focusing on AI, Cloud and modern web apps',
	openGraph: { images: ['/og-image.png'] },
	icons: {
		favicon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	}
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				{/* Favicons and manifest */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
			</head>
			<body className="antialiased">
				<ScrollReveal />
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}