"use client";

import { BookText, ChartCandlestick, ChartNoAxesCombined, Landmark,LayoutDashboard, LucideIcon, Minimize2, NotebookText, Power, RotateCw, Settings, ShoppingCart,} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useRouter } from "next/navigation";



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
        ${isActive ? "bg-[#1f1f1f] text-green-700 font-semibold border border-b-emerald-700" : "text-gray-300 hover:bg-[#1a1a1a]"}
      `}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
};

export default function Sidebar() {

  return (
    <aside className="w-64 bg-[#252527] text-white flex flex-col">

      <div className="px-4 py-4 font-bold text-lg border-b border-[#1f1f1f]">
        BCOR ERP
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <NavItem icon={LayoutDashboard} label="Dashboard" href="/bcor/dashboard" />
        <NavItem icon={BookText} label="Master" href="/bcor/master" />
        <NavItem icon={ChartNoAxesCombined} label="Sales" href="/bcor/sales" />
        <NavItem icon={ShoppingCart} label="Purchase" href="/bcor/purchase" />
        <NavItem icon={ChartCandlestick} label="Stock" href="/bcor/stock" />
        <NavItem icon={Landmark} label="Accounts" href="/bcor/accounts" />
        <NavItem icon={NotebookText} label="Reports" href="/bcor/reports" />
        <NavItem icon={Settings} label="Settings" href="/bcor/settings" />
      </nav>

      <nav className="p-3 border-t border-[#1f1f1f] space-y-1">
        <button
        // onClick={handleLogout}
         className="flex w-full items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1a1a] text-sm text-red-400">
          <Power size={18} className="text-red-500" />
          Power Off
          </button>

        <button className="flex w-full items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1a1a] text-sm">
          <RotateCw size={18} className="bg-green-500 rounded-md"/> Restart
        </button>
        <button className="flex w-full items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1a1a] text-sm">
          <Minimize2 size={18} className="bg-blue-500 rounded-md"/> Minimize
        </button>
      </nav>

    </aside>
  );
}