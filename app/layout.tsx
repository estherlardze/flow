import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { homeMetadata } from "@/lib/seo/home";

import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import "react-phone-number-input/style.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <QueryProvider>
          {children}
        </QueryProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
