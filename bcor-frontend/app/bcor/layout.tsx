"use client";

import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 bg-[#f3f1f1] text-black">
          {children}
        </main>
        <Footer />
      </div>

    </div>
  );
}
