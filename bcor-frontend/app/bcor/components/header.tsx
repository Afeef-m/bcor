"use client";

import { BellRing, FileText, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 bg-gray-200 border-b border-gray-300 flex items-center px-6 text-gray-700">

      <div className="flex-1 font-semibold">
        RASIK BAG SHOP - GUIC KLSE0001
      </div>

      <div className="flex items-center gap-5">

        <button className="p-1 hover:bg-gray-300 rounded">
          <Mail size={18} />
        </button>

        <button className="p-1 hover:bg-gray-300 rounded">
          <BellRing size={18} />
        </button>

        <button className="p-1 hover:bg-gray-300 rounded">
          <FileText size={18} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/user-profile.svg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full border"
          />
          <span className="font-medium">SUPERADMIN</span>
        </div>

      </div>
    </header>
  );
}
