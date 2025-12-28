"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    } else {
      router.replace("/dashboard");
    }
  }, [router]);

  return (
    <div className="h-screen w-screen bg-[#F1F5F9] dark:bg-[#020617] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-500"></div>
    </div>
  );
}
