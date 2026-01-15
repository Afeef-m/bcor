"use client";
import React from 'react'

export default function Login() {
  return (
    <div>
      login
    </div>
  )
}




// "use client";
// import React, { useActionState } from "react";

// async function updateForm(prevState, formData) {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   if (!email || !password) {
//     return { error: "Email and password required" };
//   }

//   if (email === "admin@test.com" && password === "1234") {
//     return { success: true };
//   }

//   return { error: "Invalid credentials" };
// }

// export default function Login() {
//   const [state, formAction, isPending] = useActionState(updateForm, null);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold text-center mb-4">
//           Login In Bcor
//         </h2>

//         <form action={formAction} className="flex flex-col gap-3">
//           <label className="text-sm font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
//           />

//           <label className="text-sm font-medium">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
//           />

//           <button
//             type="submit"
//             disabled={isPending}
//             className="mt-2 bg-lime-600 text-white py-2 rounded hover:bg-lime-700 disabled:opacity-50"
//           >
//             {isPending ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         {state?.error && (
//           <p className="text-red-500 text-sm mt-3">{state.error}</p>
//         )}
//         {state?.success && (
//           <p className="text-green-600 text-sm mt-3">
//             Login successful 
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }


