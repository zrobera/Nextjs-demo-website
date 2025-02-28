"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Building, Heart, Menu, Package, Search, ShoppingCart, User } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"

export default function Header() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const { toast } = useToast()

  const handleLogout = () => {
    logout()
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Browse our categories and products</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link href="/" className="flex items-center py-2 text-lg font-semibold">
                Home
              </Link>
              <Link href="/products" className="flex items-center py-2 text-lg font-semibold">
                Products
              </Link>
              <Link href="/categories" className="flex items-center py-2 text-lg font-semibold">
                Categories
              </Link>
              <Link href="/about" className="flex items-center py-2 text-lg font-semibold">
                About
              </Link>
              <Link href="/contact" className="flex items-center py-2 text-lg font-semibold">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Package className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">AuthKit Shop</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[
                    {
                      title: "Electronics",
                      href: "/products?category=electronics",
                      description: "Explore our range of cutting-edge electronics and gadgets",
                    },
                    {
                      title: "Clothing",
                      href: "/products?category=clothing",
                      description: "Discover the latest fashion trends and styles",
                    },
                    {
                      title: "Home & Kitchen",
                      href: "/products?category=home",
                      description: "Find everything you need for your home and kitchen",
                    },
                    {
                      title: "Sports & Outdoors",
                      href: "/products?category=sports",
                      description: "Gear up for your next adventure with our sports equipment",
                    },
                  ].map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/products"}>
                  All Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/contact"}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <Badge variant="secondary" className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">
                2
              </Badge>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/organization">
                    <Building className="mr-2 h-4 w-4" />
                    <span>Organization</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link href="/auth/login">Sign in</Link>
            </Button>
          )}

          <ModeToggle />
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-t py-3">
          <div className="container">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search for products..." className="w-full pl-9 pr-12" />
              <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

