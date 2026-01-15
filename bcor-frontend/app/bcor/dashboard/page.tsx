import {
  DollarSign,
  ShoppingCart,
  Boxes,
  Users,
  Package,
  Landmark,
} from "lucide-react";
import DashTable from "../components/dashTable";

const stats = [
  {
    title: "Sales",
    value: "5,485,894,199.43",
    icon: DollarSign,
    bg: "from-blue-400 to-teal-500",
  },
  {
    title: "Purchase",
    value: "33,585,133.92",
    icon: ShoppingCart,
    bg: "from-red-400 to-orange-500",
  },
  {
    title: "Stock",
    value: "43,252,091,786.80",
    icon: Boxes,
    bg: "from-green-400 to-emerald-500",
  },
  {
    title: "Cash In Hand",
    value: "3,575,698,300.97",
    icon: Users,
    bg: "from-green-500 to-green-700",
  },
  {
    title: "Total Quantity",
    value: "106,317,628.07",
    icon: Package,
    bg: "from-indigo-400 to-violet-500",
  },
  {
    title: "Cash In Bank",
    value: "-1,953,720,176.98",
    icon: Landmark,
    bg: "from-red-500 to-red-700",
  },
];

export default function Dashboard() {
  return (
    <section className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`bg-linear-to-r ${item.bg} text-white rounded-xl p-5 shadow-lg`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm opacity-90">{item.title}</h3>
                  <p className="text-xl font-bold mt-1">{item.value}</p>
                </div>

                <div className="w-12 h-12 mt-7 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon size={26} className="text-white" />
                </div>
              </div>
              <button className="text-xs hover:underline mt-4 opacity-90 hover:opacity-100 cursor-pointer">
                View Details
              </button>
            </div>
          );
        })}
      </div>
      <DashTable />
      </section>
  );
}
