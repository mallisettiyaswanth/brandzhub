import { Clock, Package, BadgeDollarSign, Truck } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 bg-gray-200 flex flex-row justify-around">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold">48hrs Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Fast and reliable shipping within 48 hours
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold">Quality Products</h3>
            <p className="text-sm text-muted-foreground">
              Premium quality guaranteed on all items
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <BadgeDollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold">Low Price</h3>
            <p className="text-sm text-muted-foreground">
              Competitive prices on our entire range
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold">No Delivery Charges</h3>
            <p className="text-sm text-muted-foreground">
              Free shipping on all orders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
