import type { Metadata } from "next";
import {
	ClerkProvider,

} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Nestwell | Find Your Perfect Home",
		template: "%s | Nestwell",
	},
	description:
		"Nestwell is a modern real estate platform helping you discover, explore, and secure your dream property with confidence.",
	keywords: [
		"real estate",
		"homes for sale",
		"property listings",
		"buy a home",
		"rent a home",
		"Nestwell",
	],
	authors: [{ name: "Nestwell" }],
	creator: "Nestwell",
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: "Nestwell",
		title: "Nestwell | Find Your Perfect Home",
		description:
			"Discover your dream property on Nestwell — a modern real estate platform built for buyers, sellers, and renters.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Nestwell | Find Your Perfect Home",
		description:
			"Discover your dream property on Nestwell — a modern real estate platform built for buyers, sellers, and renters.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
