import {
  ArrowUpNarrowWide,
  FileSpreadsheet,
} from "lucide-react";
import SalesTable from "../components/salesTable";

export default function Sales() {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          SALES SUMMARY
        </h2>

        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded shadow text-sm">
            PDF
          </button>
          <button className="p-2 bg-cyan-500 text-white rounded shadow">
            <FileSpreadsheet size={16} />
          </button>
          <button className="px-3 py-1 bg-green-600 text-white rounded shadow text-sm">
            Filter
          </button>
          <button className="p-2 bg-green-700 text-white rounded shadow">
            <ArrowUpNarrowWide size={16} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-200 p-4 rounded mb-6">
        <div className="flex items-center gap-2 mb-3">
          <input type="checkbox" />
          <label className="text-sm">Show Details</label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="text-sm block mb-1">Payment Type</label>
            <select className="w-full p-2 rounded border">
              <option>All</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm block mb-1">Report Period</label>
            <select className="w-full p-2 rounded border">
              <option>All</option>
            </select>
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded shadow">
            Search
          </button>
        </div>
      </div>

      {/* Summary Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-sm">
        <div className="space-y-2">
          <p><strong>Total Days</strong> : 1156</p>
          <p><strong>Net Invoice Amount</strong> : 6,287,001,007.57</p>
          <p><strong>Total Discount Amount</strong> : 16,163.16</p>
          <p><strong>Total Round Off</strong> : 3.54</p>
          <p><strong>Total Invoice Amount</strong> : 6,287,017,167.18</p>
          <p><strong>Total VAT Amount</strong> : 800,669,609.50</p>
          <p><strong>Total Amount Excl. VAT</strong> : 5,486,347,557.68</p>
        </div>

        <div className="space-y-2">
          <p><strong>Total Promotional Discount</strong> : 10.00</p>
        </div>
      </div>

      {/* Table */}
      <SalesTable/>
    </section>
  );
}
