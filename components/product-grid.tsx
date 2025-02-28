import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

// Mock product data
const products = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    rating: 4.5,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    category: "Electronics",
    isNew: false,
    isSale: true,
    salePrice: 149.99,
  },
  {
    id: "3",
    name: "Bluetooth Portable Speaker",
    price: 79.99,
    rating: 4.2,
    reviewCount: 56,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    category: "Electronics",
    isNew: false,
    isSale: false,
  },
  {
    id: "4",
    name: "Ultra HD 4K Monitor",
    price: 349.99,
    rating: 4.7,
    reviewCount: 42,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    category: "Electronics",
    isNew: true,
    isSale: false,
  },
  {
    id: "5",
    name: "Ergonomic Office Chair",
    price: 249.99,
    rating: 4.4,
    reviewCount: 78,
    image: "https://images.unsplash.com/photo-1505843490578-d3004cc77811?w=800&q=80",
    category: "Furniture",
    isNew: false,
    isSale: true,
    salePrice: 199.99,
  },
  {
    id: "6",
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    rating: 4.3,
    reviewCount: 112,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
    category: "Home & Kitchen",
    isNew: false,
    isSale: false,
  },
  {
    id: "7",
    name: "Wireless Charging Pad",
    price: 39.99,
    rating: 4.1,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=800&q=80",
    category: "Electronics",
    isNew: false,
    isSale: false,
  },
  {
    id: "8",
    name: "Smart Home Security Camera",
    price: 129.99,
    rating: 4.6,
    reviewCount: 93,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
    category: "Electronics",
    isNew: true,
    isSale: false,
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </Link>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-2 rounded-full opacity-70 hover:opacity-100"
            >
              <Heart className="h-4 w-4" />
            </Button>
            {product.isNew && <Badge className="absolute left-2 top-2">New</Badge>}
            {product.isSale && (
              <Badge variant="destructive" className="absolute left-2 top-2">
                Sale
              </Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">{product.category}</div>
            <Link href={`/products/${product.id}`} className="line-clamp-1 font-medium hover:underline">
              {product.name}
            </Link>
            <div className="mt-2 flex items-center">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
              </div>
              <span className="ml-2 text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              {product.isSale ? (
                <>
                  <span className="font-bold">${product.salePrice?.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full gap-1">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

