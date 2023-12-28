import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.scss';

const poppins = Poppins({
	weight: ['400', '500', '600', '700', '900'],
	subsets: ['devanagari'],
});

export const metadata: Metadata = {
	title: 'Github Profile Maker',
	description: 'Generated beautiful profile for your github account',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
