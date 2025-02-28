import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ProductGrid from "@/components/product-grid"
import FeaturedProducts from "@/components/featured-products"
import CategoryList from "@/components/category-list"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-8 text-white">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold">Welcome to AuthKit E-commerce</h1>
            <p className="mb-6 text-lg">
              Discover our wide range of products with seamless shopping experience.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="text"
                placeholder="Search products..."
                className="bg-white/20 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button type="submit" variant="secondary">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Featured Categories</h2>
        <CategoryList />
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
        <FeaturedProducts />
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">New Arrivals</h2>
        <ProductGrid />
      </section>
    </div>
  )
}

