import Image from "next/image";
import localFont from "next/font/local";
import MainLayout from "@/components/@layouts/main-layout";

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

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Layouts here (you can test your layouts here) */}
      <MainLayout>this is working</MainLayout>
    </div>

  );
}
