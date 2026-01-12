"use client";

import {
  UserCog,
  Users,
  Package,
  Factory,
  Layers,
  Shapes,
  Boxes,
  CalendarClock,
  FileText,
  Map,
  MapPin,
  Mailbox,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type MasterCardProps = {
  label: string;
  icon: React.ElementType;
  href: string;
  color?: string;
};

const MasterCard = ({ label, icon: Icon, href,color }: MasterCardProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition"
    >
       <Icon size={32} className={color} />
      <span className="font-medium text-gray-800">{label}</span>
    </Link>
  );
};

export default function Dashboard() {

  return (
    <div className="space-y-6">

      <h1 className="text-xl font-semibold text-gray-800">Master</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <MasterCard label="Role Master" icon={UserCog} color="text-blue-600" href="/bcor/master/roles" />
        <MasterCard label="User Master" icon={Users} color="text-blue-500" href="/bcor/master/users" />

        <MasterCard label="Product Master" icon={Package} color="text-amber-600" href="/bcor/master/products" />
        <MasterCard label="Manufacturer Master" icon={Factory} color="text-amber-500" href="/bcor/master/manufacturers" />

        <MasterCard label="Group Master" icon={Layers} color="text-indigo-600" href="/bcor/master/groups" />
        <MasterCard label="Category Master" icon={Shapes} color="text-indigo-500" href="/bcor/master/categories" />
        <MasterCard label="Pack Master" icon={Boxes} color="text-indigo-400" href="/bcor/master/packs" />

        <MasterCard label="Schedule Master" icon={CalendarClock} color="text-cyan-600" href="/bcor/master/schedules" />

        <MasterCard label="Content Master" icon={FileText} color="text-purple-600" href="/bcor/master/content" />

        <MasterCard label="State Master" icon={Map} color="text-green-600" href="/bcor/master/states" />
        <MasterCard label="District Master" icon={MapPin} color="text-green-500" href="/bcor/master/districts" />
        <MasterCard label="Pincode Master" icon={Mailbox} color="text-green-400" href="/bcor/master/pincodes" />
        <MasterCard label="Area Master" icon={MapPin} color="text-green-300" href="/bcor/master/areas" />

        <MasterCard label="Professional Master" icon={Briefcase} color="text-rose-600" href="/bcor/master/professionals" />

      </div>
    </div>
  );
}
