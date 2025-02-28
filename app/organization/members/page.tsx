"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock members data
const initialMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    joinedAt: "20 Jan, 2024",
  },
  {
    id: "2",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Member",
    status: "Active",
    joinedAt: "20 Jan, 2024",
  },
  {
    id: "3",
    name: "Robert Martinez",
    email: "robert@example.com",
    role: "Member",
    status: "Active",
    joinedAt: "20 Jan, 2024",
  },
  {
    id: "4",
    name: "Michael Pitt",
    email: "michael@example.com",
    role: "Member",
    status: "Active",
    joinedAt: "20 Jan, 2024",
  },
]

export default function MembersPage() {
  const [members, setMembers] = useState(initialMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleRemoveMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id))
    toast({
      title: "Member removed",
      description: "The member has been removed from your organization.",
    })
  }

  const handleRoleChange = (id: string, newRole: string) => {
    setMembers(members.map((member) => (member.id === id ? { ...member, role: newRole } : member)))
    toast({
      title: "Role updated",
      description: "The member's role has been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Members</h1>
        <p className="text-muted-foreground">Manage members of your organization</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Members Detail</CardTitle>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>
                    <Badge variant={member.role === "Admin" ? "default" : "outline"}>{member.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                    >
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{member.joinedAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleRoleChange(member.id, member.role === "Admin" ? "Member" : "Admin")}
                        >
                          Change to {member.role === "Admin" ? "Member" : "Admin"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => handleRemoveMember(member.id)}
                        >
                          Remove Member
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

