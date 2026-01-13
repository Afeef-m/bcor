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

        <main
          className="flex-1 bg-[#f3f1f1] text-blackb transition-all duration-300
    md:ml-16
    md:group-hover:ml-52
    p-4 md:p-6"
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
