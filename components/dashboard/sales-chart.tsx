"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock sales data
const data = [
  { name: "Jan", total: 4500 },
  { name: "Feb", total: 3800 },
  { name: "Mar", total: 5200 },
  { name: "Apr", total: 4900 },
  { name: "May", total: 6500 },
  { name: "Jun", total: 5800 },
  { name: "Jul", total: 7200 },
  { name: "Aug", total: 6800 },
  { name: "Sep", total: 8100 },
  { name: "Oct", total: 7500 },
  { name: "Nov", total: 9200 },
  { name: "Dec", total: 10500 },
]

export function SalesChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] rounded-md border p-6" />
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <Tooltip
          formatter={(value) => [`$${value}`, "Revenue"]}
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
        />
        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

