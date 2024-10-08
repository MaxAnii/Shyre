import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
const IBM = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400"],
});
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${IBM.className} antialiased`}>{children}</body>
		</html>
	);
}
