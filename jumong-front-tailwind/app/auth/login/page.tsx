"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";
import { saveUser } from "@/lib/auth-storage";
import { toast } from "sonner";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Login failed"
        );
      }

      const authUser = {
        id: data.user.id,
        email: data.user.email,
        role: data.user.role,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      };

      saveUser(authUser);

      dispatch(login(authUser));

      toast.success("Login successful");

      if (authUser.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="relative mx-auto min-h-screen my-10 flex items-center justify-center bg-[#9896f0] overflow-hidden p-3">
  
  {/* Background Pattern */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-10"
    style={{
      backgroundImage: "url('/pattern1.jpg')",
    }}
  />

   
    <form
      onSubmit={handleLogin}
      className="md:w-[40%] max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.12)] relative z-10"
    >
      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded mb-4"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded mb-4"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#2A1870] text-amber-50 hover:bg-amber-50 hover:text-[#2A1870] py-3 rounded"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
     </div>
  );
}