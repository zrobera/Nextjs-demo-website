"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Smartphone } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function SecurityPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const { toast } = useToast()

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      })
      return
    }

    // Simulate API call
    toast({
      title: "Password updated",
      description: "Your password has been updated successfully.",
    })

    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  // Mock active sessions
  const activeSessions = [
    {
      id: "1",
      device: "MacBook Pro",
      location: "San Francisco, CA",
      lastActive: "Just now",
      browser: "Chrome 120",
      os: "macOS 14.1",
    },
    {
      id: "2",
      device: "iPhone 14 Pro",
      location: "San Francisco, CA",
      lastActive: "2 hours ago",
      browser: "Safari Mobile",
      os: "iOS 17.2",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Security Detail</h2>
        <p className="text-sm text-muted-foreground">Manage your account security settings</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Active Sessions</h3>
        <div className="space-y-4">
          {activeSessions.map((session) => (
            <div key={session.id} className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <Image src="/placeholder.svg?height=24&width=24" alt={session.device} width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">{session.device}</h4>
                    <p className="text-sm text-muted-foreground">
                      {session.browser} • {session.location} • {session.lastActive}
                    </p>
                  </div>
                </div>
                {session.id !== "1" && (
                  <Button variant="outline" size="sm">
                    Revoke
                  </Button>
                )}
                {session.id === "1" && (
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                  >
                    Current Session
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-medium">Two-Factor Authentication</h3>
        <div className="rounded-md border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Smartphone className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium">Authenticator App</h4>
                <p className="text-sm text-muted-foreground">Use an authenticator app to generate one-time codes</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Setup
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-medium">Change Password</h3>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                name="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={passwordForm.currentPassword}
                onChange={handlePasswordChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-1"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showCurrentPassword ? "Hide password" : "Show password"}</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-1"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showNewPassword ? "Hide password" : "Show password"}</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-1"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
              </Button>
            </div>
          </div>

          <Button type="submit" className="mt-2">
            Change Password
          </Button>
        </form>
      </div>
    </div>
  )
}

