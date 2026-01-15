"use client"

import React from 'react'

export default function DashTable() {
  return (
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
         {/* Outstanding Payable */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-3 text-center">
            Outstanding Payable
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse ">
              <tbody>
                {[1.0, 0.8, 0.6, 0.4, 0.2].map((label, i) => (
                  <tr key={i} className="text-xs text-gray-500">
                    <td className="w-8 text-right pr-1 align-middle">{label}</td>
                    <td className=" border border-gray-300 border-l-2 border-l-gray-500 px-2 py-2">&nbsp; </td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Outstanding Receivables */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-3 text-center">
            Outstanding Receivables
          </h3>

          <div className="overflow-x-auto">
           <table className="w-full border-collapse ">
              <tbody>
                {[1.0, 0.8, 0.6, 0.4, 0.2].map((label, i) => (
                  <tr key={i} className="text-xs text-gray-500">
                    <td className="w-8 text-right pr-1 align-middle">{label}</td>
                    <td className=" border border-gray-300 border-l-2 border-l-gray-500 px-2 py-2">&nbsp; </td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

  )
}


