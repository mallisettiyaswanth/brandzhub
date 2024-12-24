"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [email] = useState(() => {
    return localStorage.getItem("email") ?? undefined;
  });
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const rotuer = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!email) rotuer.replace("/");
  }, []);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow-md hidden lg:block">
          <nav className="p-5 flex gap-3 flex-col">
            <Link href="/">
              <Button
                variant="ghost"
                className={`w-full justify-start rounded-md ${
                  pathName === "/" && "bg-accent"
                } `}
              >
                Home
              </Button>
            </Link>
            <Link href="/admin/products">
              <Button
                variant="ghost"
                className={`w-full justify-start rounded-md ${
                  pathName === "/admin/products" && "bg-accent"
                } `}
              >
                Products
              </Button>
            </Link>
            <Link href="/admin/orders">
              <Button
                variant="ghost"
                className={`w-full justify-start rounded-md ${
                  pathName === "/admin/orders" && "bg-accent"
                } `}
              >
                Orders
              </Button>
            </Link>
            <Link href="/admin/add-products">
              <Button
                variant="ghost"
                className={`w-full justify-start rounded-md ${
                  pathName === "/admin/add-products" && "bg-accent"
                } `}
              >
                Add Products
              </Button>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-8 overflow-auto">
          <div className="lg:hidden mb-5">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger>
                <Button>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[540px]" side="left">
                <SheetHeader>
                  <SheetDescription className="flex gap-3 flex-col">
                    <Link href="/" onClick={() => setIsSheetOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start rounded-md ${
                          pathName === "/" && "bg-accent"
                        } `}
                      >
                        Home
                      </Button>
                    </Link>
                    <Link
                      href="/admin/products"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start rounded-md ${
                          pathName === "/admin/products" && "bg-accent"
                        } `}
                      >
                        Products
                      </Button>
                    </Link>
                    <Link
                      href="/admin/orders"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start rounded-md ${
                          pathName === "/admin/orders" && "bg-accent"
                        } `}
                      >
                        Orders
                      </Button>
                    </Link>
                    <Link
                      href="/admin/add-products"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start rounded-md ${
                          pathName === "/admin/add-products" && "bg-accent"
                        } `}
                      >
                        Add Products
                      </Button>
                    </Link>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
