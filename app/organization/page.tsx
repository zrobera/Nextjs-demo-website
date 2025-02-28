"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function OrganizationPage() {
  const [orgName, setOrgName] = useState("Acme Org")
  const [isEditing, setIsEditing] = useState(false)
  const { toast } = useToast()

  const handleSave = () => {
    setIsEditing(false)
    toast({
      title: "Organization updated",
      description: "Your organization details have been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Organization</h1>
        <p className="text-muted-foreground">Manage your organization details and settings</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>General Detail</CardTitle>
          {!isEditing && (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
              <Pencil className="h-4 w-4" />
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Organization logo" />
                <AvatarFallback>AO</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium">Organization Logo</h3>
                <p className="text-sm text-muted-foreground">
                  This will be displayed on your profile and throughout the platform.
                </p>
              </div>
              <Button variant="outline" className="ml-auto">
                Change Logo
              </Button>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="org-name">Organization Name</Label>
                {isEditing ? (
                  <Input id="org-name" value={orgName} onChange={(e) => setOrgName(e.target.value)} />
                ) : (
                  <div className="rounded-md border border-input bg-background px-3 py-2">{orgName}</div>
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

            <div className="rounded-md border border-destructive/10 bg-destructive/5 p-4">
              <h3 className="font-medium text-destructive">Leave Organization</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                You will lose access to all resources and data associated with this organization.
              </p>
              <Button variant="destructive" className="mt-4" size="sm">
                Leave Organization
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

