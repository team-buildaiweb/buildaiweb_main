"use client";
import type React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/auth/sign-in");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navigation />
      <div className='pt-16'>{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
