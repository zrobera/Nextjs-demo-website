import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock categories
const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
    count: 124,
  },
  {
    id: "clothing",
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    count: 86,
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    count: 92,
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    count: 45,
  },
  {
    id: "books",
    name: "Books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80",
    count: 112,
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    count: 78,
  },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/products?category=${category.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-square overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={200}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-3 text-center">
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-xs text-muted-foreground">{category.count} products</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

