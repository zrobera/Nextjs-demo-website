"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { toast } = useToast()

  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      quantity: 1,
      color: "Black",
      size: "One Size",
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 199.99,
      quantity: 1,
      color: "Silver",
      size: "One Size",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))

    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    })
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const shipping = 10.0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to secure checkout...",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
          <h2 className="mb-4 text-xl font-medium">Your cart is empty</h2>
          <p className="mb-6 text-center text-muted-foreground">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="hidden p-4 sm:grid sm:grid-cols-6">
                <div className="col-span-3 font-medium">Product</div>
                <div className="text-center font-medium">Price</div>
                <div className="text-center font-medium">Quantity</div>
                <div className="text-right font-medium">Total</div>
              </div>

              <Separator />

              {cartItems.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-6 sm:items-center">
                    <div className="col-span-3 flex gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-md bg-gray-100">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          <Link href={`/products/${item.id}`} className="hover:underline">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Color: {item.color} | Size: {item.size}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-1 h-auto p-0 text-sm text-red-500 hover:text-red-600 sm:hidden"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="mr-1 h-3 w-3" />
                          Remove
                        </Button>
                      </div>
                    </div>

                    <div className="text-center sm:text-center">
                      <div className="sm:hidden text-sm font-medium">Price:</div>${item.price.toFixed(2)}
                    </div>

                    <div className="flex items-center sm:justify-center">
                      <div className="sm:hidden text-sm font-medium mr-2">Quantity:</div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end">
                      <div className="sm:hidden text-sm font-medium">Total:</div>
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-4 hidden sm:inline-flex"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>

                  {cartItems.indexOf(item) < cartItems.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" onClick={() => setCartItems([])}>
                Clear Cart
              </Button>
            </div>
          </div>

          <div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-lg font-bold">Order Summary</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Input placeholder="Discount code" />
                  <Button variant="outline">Apply</Button>
                </div>
                <Button className="w-full" onClick={handleCheckout}>
                  Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

