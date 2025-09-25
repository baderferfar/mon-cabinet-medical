import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"


export const metadata: Metadata = {
  title: "Cabinet Médical Paris Etoile",
  description: "Mon Cabinet Médical à Paris Etoile - Soins de qualité pour votre santé et bien-être.",
    icons: {
      icon:  "/clinic.png"
     },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
 
         <body
          className={cn("bg-background text-foreground",inter.className)}
        >
          
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            <div className="fixed top-0 left-0 right-0 z-80">
                <Navbar/>
            </div>

            {children}

          </ThemeProvider>
        </body>
      
    </html>
  
  );
}
