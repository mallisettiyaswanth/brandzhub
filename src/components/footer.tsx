import Link from 'next/link'
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-600">123 E-commerce Street</p>
            <p className="text-sm text-gray-600">Shopville, SV 12345</p>
            <p className="text-sm text-gray-600">Email: info@brandclub.com</p>
            <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-600 hover:text-gray-900">Shipping Information</Link></li>
              <li><Link href="/returns" className="text-sm text-gray-600 hover:text-gray-900">Returns Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Instagram</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Twitter</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Pinterest</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-2 text-sm text-gray-600">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border-gray-300 px-3 py-2 text-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <button
                type="submit"
                className="rounded-r-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-600">&copy; 2023 BRAND CLUB. All rights reserved.</p>
          <div className="mt-4 flex items-center md:mt-0">
            <Link
              href="https://wa.me/1234567890"
              className="flex items-center rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Ping me on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

