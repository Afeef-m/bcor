"use client";

import { BellRing, FileText, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    // <header className="h-16 bg-gray-200 border-b border-gray-300 flex items-center justify-between px-6 text-gray-700">
      <header
  className="
    h-16
    bg-gray-200
    border-b border-gray-300
    flex items-center
    justify-between
    px-6
    text-gray-700
    transition-all duration-300
    ml-16
    md:group-hover:ml-52
  "
>

      {/* Left: Title */}
      <div className="font-semibold truncate">
        RASIK BAG SHOP – GUIC KLSE0001
      </div>

      {/* Right: Actions + User */}
      <div className="flex items-center gap-6">

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="h-9 w-9 flex items-center justify-center hover:bg-gray-300 rounded">
            <Mail size={18} />
          </button>

          <button className="h-9 w-9 flex items-center justify-center hover:bg-gray-300 rounded">
            <BellRing size={18} />
          </button>

          <button className="h-9 w-9 flex items-center justify-center hover:bg-gray-300 rounded">
            <FileText size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-400" />

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/user-profile.svg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full border"
          />
          <span className="font-medium text-sm whitespace-nowrap">
            SUPERADMIN
          </span>
        </div>

      </div>
    </header>
  );
}
