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

// Mock users data
const initialUsers = [
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
    role: "User",
    status: "Active",
    joinedAt: "20 Jan, 2024",
  },
  {
    id: "3",
    name: "Robert Martinez",
    email: "robert@example.com",
    role: "User",
    status: "Active",
    joinedAt: "20 Jan, 2024",
  },
  {
    id: "4",
    name: "Michael Pitt",
    email: "michael@example.com",
    role: "User",
    status: "Inactive",
    joinedAt: "20 Jan, 2024",
  },
]

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers)
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleStatusChange = (id: string, newStatus: string) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, status: newStatus } : user)))
    toast({
      title: "User status updated",
      description: `User status has been changed to ${newStatus}.`,
    })
  }

  const handleRoleChange = (id: string, newRole: string) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, role: newRole } : user)))
    toast({
      title: "User role updated",
      description: `User role has been changed to ${newRole}.`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">Manage users and their permissions</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Users</CardTitle>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
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
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "Admin" ? "default" : "outline"}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        user.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinedAt}</TableCell>
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
                          onClick={() => handleRoleChange(user.id, user.role === "Admin" ? "User" : "Admin")}
                        >
                          Change to {user.role === "Admin" ? "User" : "Admin"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(user.id, user.status === "Active" ? "Inactive" : "Active")}
                        >
                          Mark as {user.status === "Active" ? "Inactive" : "Active"}
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

