import Link from 'next/link'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold">
            BRAND CLUB
          </Link>
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products and More..."
                className="w-full pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <nav className="flex items-center gap-4">
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
        <nav className="flex items-center gap-8 py-4">
          {['Slippers', 'Shoes', 'Fashion', 'Watches', 'Gadgets'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

