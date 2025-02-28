"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Building, ChevronDown, CreditCard, LogOut, Settings, Shield, User, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "General",
      href: "/organization",
      icon: Building,
    },
    {
      title: "Members",
      href: "/organization/members",
      icon: Users,
    },
    // {
    //   title: "Billing",
    //   href: "/organization/billing",
    //   icon: CreditCard,
    // },
    // {
    //   title: "Settings",
    //   href: "/organization/settings",
    //   icon: Settings,
    // },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="border-r border-border bg-primary text-primary-foreground mt-16">
          <SidebarHeader className="flex h-14 items-center border-b border-primary-foreground/10 px-4">
            <Link href="/organization" className="flex items-center gap-2 font-semibold text-white">
              <Building className="h-6 w-6" />
              <span>Organization</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="text-white hover:bg-primary-foreground/10 data-[active=true]:bg-primary-foreground/20"
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-primary-foreground/10">
            <div className="p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 text-white hover:bg-primary-foreground/10"
                  >
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>John Doe</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/security">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Security</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <header className="flex h-14 items-center border-b px-6">
            <SidebarTrigger />
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

