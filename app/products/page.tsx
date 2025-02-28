"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Search, SlidersHorizontal } from "lucide-react"
import ProductGrid from "@/components/product-grid"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Products</h1>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search products..." className="w-[200px] pl-9 md:w-[300px]" />
          </div>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow down your product search</SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-4">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Categories</h3>
                  <div className="space-y-3">
                    {["Electronics", "Clothing", "Home & Kitchen", "Books", "Sports"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={10}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex items-center justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-medium">Brands</h3>
                  <div className="space-y-3">
                    {["Apple", "Samsung", "Nike", "Adidas", "Sony"].map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Button>Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="hidden md:block">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Categories</h3>
              <div className="space-y-3">
                {["Electronics", "Clothing", "Home & Kitchen", "Books", "Sports"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={`desktop-category-${category}`} />
                    <Label htmlFor={`desktop-category-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Price Range</h3>
              <div className="space-y-4">
                <Slider defaultValue={[0, 1000]} max={1000} step={10} onValueChange={(value) => setPriceRange(value)} />
                <div className="flex items-center justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Brands</h3>
              <div className="space-y-3">
                {["Apple", "Samsung", "Nike", "Adidas", "Sony"].map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`desktop-brand-${brand}`} />
                    <Label htmlFor={`desktop-brand-${brand}`}>{brand}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Button>Apply Filters</Button>
          </div>
        </div>
        <div className="md:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}

