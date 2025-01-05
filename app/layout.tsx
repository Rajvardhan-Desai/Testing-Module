import type { Metadata } from "next";
import { Rozha_One,Laila } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/utils/AuthProvider";
import { ToastProvider } from "@/components/ui/ToastProvider";


const rozhaOne = Rozha_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rozha-one',
});

const laila = Laila({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-laila',
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Parikhsa Mitra",
  description: "A platform for marathi medium students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rozhaOne.variable} ${laila.variable}`}
        cz-shortcut-listen="true"
      >
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
