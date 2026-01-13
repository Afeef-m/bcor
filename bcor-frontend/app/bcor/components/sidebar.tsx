"use client";

import {
  BookText,
  ChartCandlestick,
  ChartNoAxesCombined,
  Landmark,
  LayoutDashboard,
  LucideIcon,
  Minimize2,
  NotebookText,
  Power,
  RotateCw,
  Settings,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const NavItem = ({ icon: Icon, label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition
        ${
          isActive
            ? "bg-[#1f1f1f] text-emerald-500 font-semibold"
            : "text-gray-300 hover:bg-[#1a1a1a]"
        }
      `}
    >
      <Icon size={18} />
      <span className="hidden md:group-hover:inline-flex whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside
      className="
        group
        fixed
        h-screen
        bg-[#252527]
        text-white
        flex flex-col
        transition-all duration-300 ease-in-out
        w-16
        md:hover:w-52
      "
    >
      <div className="
  h-16 px-3 border-b border-[#1f1f1f]
  flex items-center
  justify-center md:group-hover:justify-start
">

        <Image
          src="/bcor_emblem.svg"
          alt="Logo"
          width={32}
          height={32}
          priority
          className="md:group-hover:hidden"
          
        />

        <Image
          src="/bcor_emblem.svg"
          alt="Logo"
          width={120}
          height={40}
          priority
          className="hidden md:group-hover:block"
        />
      </div>
      <nav className="flex-1 p-2 space-y-1">
        <NavItem icon={LayoutDashboard} label="Dashboard" href="/bcor/dashboard" />
        <NavItem icon={BookText} label="Master" href="/bcor/masters" />
        <NavItem icon={ChartNoAxesCombined} label="Sales" href="/bcor/sales" />
        <NavItem icon={ShoppingCart} label="Purchase" href="/bcor/purchase" />
        <NavItem icon={ChartCandlestick} label="Stock" href="/bcor/stock" />
        <NavItem icon={Landmark} label="Accounts" href="/bcor/accounts" />
        <NavItem icon={NotebookText} label="Reports" href="/bcor/reports" />
        <NavItem icon={Settings} label="Settings" href="/bcor/settings" />
      </nav>

      <nav className="p-2 mb-6 border-t border-[#1f1f1f] space-y-1">
        <button className="flex w-full items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1a1a] text-sm text-red-400">
          <Power size={18} />
          <span className="hidden md:group-hover:inline">Power Off</span>
        </button>

        <button className="flex w-full items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1a1a] text-sm">
          <RotateCw size={18} />
          <span className="hidden md:group-hover:inline">Restart</span>
        </button>

        <button className="flex w-full items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1a1a] text-sm">
          <Minimize2 size={18} />
          <span className="hidden md:group-hover:inline">Minimize</span>
        </button>
      </nav>
    </aside>
  );
}
