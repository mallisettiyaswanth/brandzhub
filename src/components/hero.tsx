import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative h-[690px] w-full bg-gray-100">
      <Image
        src="/placeholder.svg?height=300&width=1200"
        alt="Crocs Banner"
        width={1200}
        height={300}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold">Make every step unforgettable</h1>
          <p className="mt-2 text-xl">find your perfect pair of Crocs.</p>
        </div>
      </div>
    </div>
  );
}

