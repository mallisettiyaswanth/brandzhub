import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { SeasonalBanner } from "@/components/seasonal-banner";
import { ProductGrid } from "@/components/product-grid";
import { Footer } from "@/components/footer";
import { CarouselPlugin } from "@/components/carousel-plugin";
import FeaturesSection from "@/components/features-section";
import PaymentWarning from "@/components/payment-warning";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <div className="flex min-h-screen flex-col bg-gray-50 pt-20">
//         <main className="flex-grow">
//           <CarouselPlugin />
//           <CategoryGrid />
//           <Hero />
//           {/* <div className="container mx-auto"> */}
//           <SeasonalBanner />
//           <ProductGrid />
//           <FeaturesSection />
//           {/* </div> */}
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <PaymentWarning />
    </>
  );
}
