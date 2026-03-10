
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'LocalListings | Modern Classifieds',
  description: 'A modernized experience for buying and selling locally.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-8 border-t bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-primary">LocalListings</span>
              <span>© 2024 All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-primary transition-colors">Safety Center</Link>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}

import Link from 'next/link';
