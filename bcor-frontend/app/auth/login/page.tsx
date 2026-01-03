"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/store/hooks";
import { loginSuccess } from "@/app/store/authSlice";
import toast from "react-hot-toast";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      toast.error("Username and password required");
      return;
    }

    dispatch(
      loginSuccess({
        user: {
          id: "1",
          username,
          role: "SUPERADMIN",
        },
        token: "mock-jwt-token",
      })
    );

    toast.success("Login successful");
    router.push("/bcor/dashboard");
    // router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded w-80 shadow">
        <h2 className="text-lg font-bold mb-4 text-center">BCOR ERP Login</h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
