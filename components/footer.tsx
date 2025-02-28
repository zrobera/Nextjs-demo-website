import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-6 w-6" />
              <span className="font-bold">AuthKit Shop</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Secure e-commerce platform with advanced authentication features. Shop with confidence and enjoy a
              seamless experience.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=electronics" className="hover:underline">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products?category=clothing" className="hover:underline">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="hover:underline">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link href="/products?category=sports" className="hover:underline">
                  Sports & Outdoors
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/profile" className="hover:underline">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:underline">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/settings" className="hover:underline">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AuthKit Shop. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:underline">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

