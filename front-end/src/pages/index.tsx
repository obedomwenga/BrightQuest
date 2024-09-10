import Image from "next/image";
import localFont from "next/font/local";
import { Montserrat as FontSans } from 'next/font/google';

import MainLayout from "@/components/@layouts/main-layout";
import LandingPageLayout from "@/components/@layouts/landing-layout";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function Home() {
  return (
    <div
      className={`${fontSans.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Layouts here (you can test your layouts here) */}
      <LandingPageLayout>this is working</LandingPageLayout>
    </div>

  );
}
