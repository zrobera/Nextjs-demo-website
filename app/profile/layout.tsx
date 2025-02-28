"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="ml-2 text-2xl font-bold">Account</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs value={pathname} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="/profile" asChild>
                <Link href="/profile">Profile</Link>
              </TabsTrigger>
              <TabsTrigger value="/profile/security" asChild>
                <Link href="/profile/security">Security</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {children}
        </CardContent>
      </Card>
    </div>
  )
}

