import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { CategoryGrid } from '@/components/category-grid'
import { SeasonalBanner } from '@/components/seasonal-banner'
import { ProductGrid } from '@/components/product-grid'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto">
          <CategoryGrid />
          <SeasonalBanner />
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

