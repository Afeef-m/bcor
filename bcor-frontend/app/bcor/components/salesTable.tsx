import React from 'react'

export default function SalesTable() {
  return (
   <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Date</th>
              <th className="border px-3 py-2 text-left">Inv. Amount</th>
              <th className="border px-3 py-2 text-left">VAT Amt.</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "12/1/2026", inv: "352.80", vat: "14.00" },
              { date: "9/1/2026", inv: "1,470.00", vat: "70.00" },
              { date: "8/1/2026", inv: "4,111.54", vat: "175.69" },
              { date: "7/1/2026", inv: "9,963.20", vat: "516.19" },
              { date: "6/1/2026", inv: "1,917.65", vat: "82.65" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-3 py-2">{row.date}</td>
                <td className="border px-3 py-2 font-semibold">
                  {row.inv}
                </td>
                <td className="border px-3 py-2 font-semibold">
                  {row.vat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}


