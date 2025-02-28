"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe",
  })
  const [isEditing, setIsEditing] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Profile Detail</h2>
        <p className="text-sm text-muted-foreground">Manage your account information</p>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">Profile Picture</h3>
          <p className="text-sm text-muted-foreground">This will be displayed on your profile</p>
        </div>
        <Button variant="outline" className="ml-auto">
          Change
        </Button>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Personal Information</h3>
          {!isEditing && (
            <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          )}
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            {isEditing ? (
              <Input id="name" name="name" value={formData.name} onChange={handleChange} />
            ) : (
              <div className="rounded-md border border-input bg-background px-3 py-2">{formData.name}</div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            {isEditing ? (
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
            ) : (
              <div className="rounded-md border border-input bg-background px-3 py-2">{formData.email}</div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            {isEditing ? (
              <Input id="username" name="username" value={formData.username} onChange={handleChange} />
            ) : (
              <div className="rounded-md border border-input bg-background px-3 py-2">{formData.username}</div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        )}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-medium">Connected Accounts</h3>
        <div className="rounded-md border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Image src="/placeholder.svg?height=24&width=24" alt="Google" width={24} height={24} />
              </div>
              <div>
                <h4 className="font-medium">Google Account</h4>
                <p className="text-sm text-muted-foreground">Connected to john@example.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

