"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#111] text-white overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto bg-[#f3f1f1] text-black p-4 md:p-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
