import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

// Mock related products
const relatedProducts = [
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
  },
  {
    id: "3",
    name: "Bluetooth Portable Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
  },
  {
    id: "7",
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=800&q=80",
  },
  {
    id: "8",
    name: "Smart Home Security Camera",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
  },
]

export default function RelatedProducts() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      {relatedProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <Link href={`/products/${product.id}`}>
            <div className="aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </Link>
          <CardContent className="p-4">
            <Link href={`/products/${product.id}`} className="line-clamp-1 font-medium hover:underline">
              {product.name}
            </Link>
            <div className="mt-2">
              <span className="font-bold">${product.price.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button variant="outline" className="w-full gap-1">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

