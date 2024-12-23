import Link from "next/link";

export function Header() {
  return (
    <header className="border-b fixed top-0 z-10 w-full bg-white ">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <Link href="/" className="text-xl font-bold">
            brandzhub
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="/" className="text-sm">
              Home
            </Link>
            <Link href="/login" className="text-sm">
              Login
            </Link>
            <Link href="/cart" className="text-sm">
              Cart
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
