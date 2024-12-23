import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { name: 'Sport Shoes', image: '/placeholder.svg?height=200&width=200' },
  { name: 'T-shirts', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Hand Bags', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Slides', image: '/placeholder.svg?height=200&width=200' },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
          className="overflow-hidden rounded-lg border bg-white p-2 transition-transform hover:scale-105"
        >
          <div className="aspect-square">
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
        </Link>
      ))}
    </div>
  )
}

