import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


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
			</head>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}