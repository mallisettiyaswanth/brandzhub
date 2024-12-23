"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [email] = useState(() => {
    return localStorage.getItem("email") ?? undefined;
  });
  const rotuer = useRouter();

  useEffect(() => {
    if (!email) rotuer.replace("/");
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="p-5 space-y-2">
          <Link href="/admin/products">
            <Button variant="ghost" className="w-full justify-start">
              Products
            </Button>
          </Link>
          <Link href="/admin/orders">
            <Button variant="ghost" className="w-full justify-start">
              Orders
            </Button>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
