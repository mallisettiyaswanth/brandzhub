import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Crocs",
    image:
      "https://res.cloudinary.com/drvi87eud/image/upload/v1735476022/c3trfp0c4crqwpc0m7u1.jpg",
  },
  {
    name: "Watches",
    image:
      "https://res.cloudinary.com/drvi87eud/image/upload/v1735906833/vcghmn5a1lyyfmmc4byi.jpg",
  },
  {
    name: "flipflops",
    image:
      "https://res.cloudinary.com/drvi87eud/image/upload/v1736423171/ntb1wlqz72jkh3fo5j8h.jpg",
  },
  {
    name: "Slides",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSADXiExPg5InELMNwZgjcQ_RhndLUmL46jB6jdyKcEX_SWbeElT8tO3qVGEaSaI9fyraRrAwMo5maM7pX1FaE3ilB8YIKzFrwGjd9iyBbdKADYbu-1uPI3Ow&usqp=CAE",
  },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/search/${category.name.toLowerCase().replace(" ", "-")}`}
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
          <p className="mt-2 text-center text-sm font-medium">
            {category.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
