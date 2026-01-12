"use client";

import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <main>
            {children}
            <Toaster position="top-center" />
          </main>
      </body>
    </html>
  );
}
