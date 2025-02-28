"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Truck } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import RelatedProducts from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")
  const { toast } = useToast()

  // Mock product data
  const product = {
    id: params.id,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    reviewCount: 124,
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    colors: ["black", "white", "blue"],
    sizes: ["s", "m", "l"],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Touch controls",
      "Foldable design",
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "32 Ohm",
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      Weight: "250g",
    },
    inStock: true,
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    })
  }

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to secure checkout...",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-md bg-gray-100">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={`Product view ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <Badge variant="outline" className="px-2 py-1">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Free shipping on orders over $50</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-8 w-8 rounded-full border-2 ${selectedColor === color ? "border-primary" : "border-transparent"}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-10 w-10 items-center justify-center rounded-md border ${
                      selectedSize === size ? "border-primary bg-primary/10 text-primary" : "border-gray-200 bg-white"
                    }`}
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="flex-1 gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="secondary" className="flex-1 gap-2" onClick={handleBuyNow}>
              Buy Now
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-medium">Free delivery</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">Enter your postal code for delivery availability</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <p>{product.description}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="features" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <RelatedProducts />
      </section>
    </div>
  )
}

