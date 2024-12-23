import Image from 'next/image'
import { Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'BIRKENSTOCK',
    rating: 4,
    price: 175.00,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    name: 'GUCCI',
    rating: 5,
    price: 599.00,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    name: 'CROCS',
    rating: 4,
    price: 85.00,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    name: 'FOSSIL',
    rating: 5,
    price: 299.00,
    image: '/placeholder.svg?height=200&width=200',
  },
  // Add more products as needed
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-lg border bg-white p-2"
        >
          <div className="aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-2 space-y-1 text-sm">
            <h3 className="font-medium">{product.name}</h3>
            <div className="flex">
              {Array.from({ length: product.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-bold">${product.price.toFixed(2)}</p>
            <p className="text-xs text-green-600">Free Delivery</p>
          </div>
        </div>
      ))}
    </div>
  )
}

