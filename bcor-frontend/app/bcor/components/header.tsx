"use client";

import { BellRing, FileText, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [showName, setShowName] = useState(false);
  return (
    <header
      className="
      h-16 bg-gray-200 border-b border-gray-300
      flex items-center justify-between
      px-4 md:px-6 text-gray-700 gap-4
    "
    >
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-gray-300"
        >
          <Menu size={20} />
        </button>

        <div className="font-semibold truncate min-w-0">
          RASIK BAG SHOP - GUIC KLSE0001
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
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

        <div className="h-6 w-px bg-gray-400" />

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowName((v) => !v)}
        >
          <Image
            src="/user-profile.svg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full border"
          />

          <span className="hidden md:inline font-medium text-sm whitespace-nowrap">
            SUPERADMIN
          </span>

          {showName && (
            <span className="md:hidden font-medium text-sm whitespace-nowrap">
              SUPERADMIN
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
