"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg shadow-md 
               hover:bg-blue-600 active:blue-red-700 
               transition-all duration-200 ease-in-out
               focus:outline-none focus:ring-2"
    >
      Logout
    </button>
  );
}
