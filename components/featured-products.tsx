import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

// Mock featured products
const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with our premium wireless headphones.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    badge: "New Release",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with our advanced smart watch.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    badge: "Best Seller",
  },
  {
    id: "3",
    name: "Ultra HD 4K Monitor",
    description: "Immerse yourself in stunning visuals with our 4K monitor.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    badge: "Limited Stock",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={400}
              className="h-[200px] w-full object-cover"
            />
            <Badge className="absolute left-2 top-2">{product.badge}</Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold">{product.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-bold">${product.price.toFixed(2)}</span>
              <Button asChild size="sm">
                <Link href={`/products/${product.id}`}>
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

