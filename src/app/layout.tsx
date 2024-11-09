import type { Metadata } from "next";
import localFont from "next/font/local";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Navbar, MobNavbar, Footer } from "@/app/components/";


const font = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
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
    <html lang="en" className="dark">
      <body
        className={`${font.className} ${font.className} antialiased bg-black`}
      >
        <Navbar />
        <MobNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}