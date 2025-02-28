import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

// Mock top products data
const topProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    sales: 124,
    revenue: 37198.76,
    growth: 12.5,
    percentage: 100,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    sales: 98,
    revenue: 19599.02,
    growth: 8.2,
    percentage: 78,
  },
  {
    id: "8",
    name: "Smart Home Security Camera",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
    sales: 76,
    revenue: 9879.24,
    growth: 15.3,
    percentage: 65,
  },
  {
    id: "4",
    name: "Ultra HD 4K Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    sales: 62,
    revenue: 21699.38,
    growth: 5.7,
    percentage: 52,
  },
  {
    id: "5",
    name: "Ergonomic Office Chair",
    image: "https://images.unsplash.com/photo-1505843490578-d3004cc77811?w=800&q=80",
    sales: 54,
    revenue: 13499.46,
    growth: -2.3,
    percentage: 45,
  },
]

export function TopProducts() {
  return (
    <div className="space-y-6">
      {topProducts.map((product) => (
        <div key={product.id} className="flex items-center gap-4">
          <Avatar className="h-10 w-10 rounded-md">
            <AvatarImage src={product.image} alt={product.name} />
            <AvatarFallback className="rounded-md">{product.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{product.name}</p>
              <span className={`text-xs font-medium ${product.growth >= 0 ? "text-green-600" : "text-red-600"}`}>
                {product.growth >= 0 ? "+" : ""}
                {product.growth}%
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{product.sales} sold</span>
              <span>${product.revenue.toFixed(2)}</span>
            </div>
            <Progress value={product.percentage} className="h-1" />
          </div>
        </div>
      ))}
    </div>
  )
}

