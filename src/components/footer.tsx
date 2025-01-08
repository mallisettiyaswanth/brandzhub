import Link from "next/link";
import { PhoneIcon as WhatsappIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-1">Railway Station Road</p>
            <p className="text-sm text-gray-600 mb-1">
              Javadhi vaari veedhi, Akividu
            </p>
            <p className="text-sm text-gray-600 mb-1">Akividu Mandal</p>
            <p className="text-sm text-gray-600 mb-1">
              Email: mamillapraveen01@gmail.com
            </p>
            <p className="text-sm text-gray-600">
              Phone:
              <br />
              +91 6309547997 <br />
              +91 7013048998
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-center border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            &copy; 2025 brandZhub. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href="https://wa.link/d9dky0"
              className="flex items-center rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Ping me on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
