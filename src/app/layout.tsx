import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My App',
  description: 'Learning Next.js with TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="text-xl font-bold">MyApp</h1>
          <nav>
            <Link href="/" className="mx-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/blog/id" className="mx-2">Blog</Link>
            <Link href="/products/productId" className="mx-2">Products</Link>
            <Link href="/profile" className="mx-2">Profile</Link>
          </nav>
        </header>

        <main className="p-6">{children}</main>

        <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
          © 2025 MyApp. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
