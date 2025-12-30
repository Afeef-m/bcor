import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <main >
          {children}
          <Toaster position="top-center" />
        </main>
      </body>
    </html>
  );
}
