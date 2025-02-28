import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock order data
const orders = [
  {
    id: "ORD-001",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder-user.jpg",
    },
    status: "completed",
    date: "2023-06-20",
    total: 299.99,
  },
  {
    id: "ORD-002",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder-user.jpg",
    },
    status: "processing",
    date: "2023-06-19",
    total: 149.99,
  },
  {
    id: "ORD-003",
    customer: {
      name: "Robert Johnson",
      email: "robert@example.com",
      avatar: "/placeholder-user.jpg",
    },
    status: "pending",
    date: "2023-06-18",
    total: 79.99,
  },
  {
    id: "ORD-004",
    customer: {
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "/placeholder-user.jpg",
    },
    status: "completed",
    date: "2023-06-17",
    total: 349.99,
  },
  {
    id: "ORD-005",
    customer: {
      name: "Michael Wilson",
      email: "michael@example.com",
      avatar: "/placeholder-user.jpg",
    },
    status: "cancelled",
    date: "2023-06-16",
    total: 199.99,
  },
]

export function RecentOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
                  <AvatarFallback>
                    {order.customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{order.customer.name}</div>
                  <div className="text-xs text-muted-foreground">{order.customer.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "completed"
                    ? "default"
                    : order.status === "processing"
                      ? "secondary"
                      : order.status === "pending"
                        ? "outline"
                        : "destructive"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

