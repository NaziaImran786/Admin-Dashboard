'use client';
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { josefinSans, lato } from "@/font";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminHeader } from "@/components/AdminHeader";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import Loading from "./loading";


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

// export const metadata: Metadata = {
//   title: "Ecommerce website template 4",
//   description: "Generated by Nazia Imran",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Trigger effect on route change

  
  return (    
    <html lang="en" className={josefinSans.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${josefinSans.className} ${lato.className} antialiased`}
      > 
      <Toaster richColors />
      <div className="min-h-screen">
            <AdminHeader />
            <div className="flex">
              <AdminSidebar />
              <main className="flex-1 p-8 bg-muted/40">
              {isLoading ? <Loading/> : children}
              </main>
            </div>
          </div>     
      </body>
    </html>
   
  );
} 

// function useState(arg0: boolean): [any, any] {
//   throw new Error("Function not implemented.");
// }

