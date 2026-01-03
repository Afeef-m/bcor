"use client";

import { Provider} from "react-redux"
import { store } from "./store/store";
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
        <Provider store={store}>
          <main>
            {children}
            <Toaster position="top-center" />
          </main>
        </Provider>
      </body>
    </html>
  );
}
