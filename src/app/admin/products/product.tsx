"use client";

import { deleteProduct } from "@/app/actions/product";
import ProductCarousel from "@/components/product-carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { AddProductForm } from "../add-products/add-product-form";

type Product = {
  id: string;
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [deleteModelOpen, setDeleteModelOpen] = useState<boolean>(false);
  const [editModelOpen, setEditModelOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async () => {
    const status = await deleteProduct(product.id);
    if (status.status === 200) {
      toast("Success", {
        description: "Product is deleted",
      });
      setDeleteModelOpen(false);
      router.refresh();
    } else {
      toast("Error", {
        description: "Something went wrong!",
      });
    }
  };

  return (
    <Card key={product.name} className="shadow-md">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ProductCarousel images={product.images} />
        <div>
          <p className="text-sm text-gray-500 mb-2">Price: ${product.cost}</p>
          <p className="text-sm text-gray-500 mb-2">
            Sizes: {product.size.join(", ") || "N/A"}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: {product.category.join(", ") || "N/A"}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 p-3 lg:p-6">
        <Dialog open={editModelOpen} onOpenChange={setEditModelOpen}>
          <DialogTrigger>
            <Button>
              <Edit />
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Edit Product</DialogTitle>
            <AddProductForm
              product={product}
              callback={() => setEditModelOpen(false)}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={deleteModelOpen} onOpenChange={setDeleteModelOpen}>
          <DialogTrigger>
            <Button variant="destructive">
              <Trash /> Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure to delete</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                product from servers.
              </DialogDescription>
            </DialogHeader>
            <div className="flex self-end gap-3 ml-auto">
              <Button onClick={() => setDeleteModelOpen(false)}>No</Button>
              <Button variant="destructive" onClick={handleDelete}>
                Yes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Edit, Trash2 } from "lucide-react";
// import { deleteProduct } from "@/app/actions/product";
// import ProductCarousel from "@/components/product-carousel";
// import { AddProductForm } from "../add-products/add-product-form";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// type Product = {
//   id: string;
//   images: string[];
//   cost: number;
//   name: string;
//   size: string[];
//   category: string[];
//   type: string;
// };

// type Props = {
//   product: Product;
// };

// const ProductCard = ({ product }: Props) => {
//   const [deleteModelOpen, setDeleteModelOpen] = useState<boolean>(false);
//   const [editModelOpen, setEditModelOpen] = useState<boolean>(false);
//   const router = useRouter();

//   const handleDelete = async () => {
//     const status = await deleteProduct(product.id);
//     if (status.status === 200) {
//       toast("Success", {
//         description: "Product is deleted",
//       });
//       setDeleteModelOpen(false);
//       router.refresh();
//     } else {
//       toast("Error", {
//         description: "Something went wrong!",
//       });
//     }
//   };

//   return (
//     <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg border-t-4 border-t-blue-500 dark:border-t-blue-400 max-w-sm">
//       <CardHeader className="bg-gradient-to-r from-blue-100 via-teal-100 to-amber-100 dark:from-blue-900/50 dark:via-teal-900/50 dark:to-amber-900/50 p-3">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
//             {product.name}
//           </h3>
//           {product.type && (
//             <Badge
//               variant="outline"
//               className="text-blue-600 border-blue-300 dark:text-blue-400 dark:border-blue-700"
//             >
//               {product.type}
//             </Badge>
//           )}
//         </div>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="relative aspect-square p-3 bg-gradient-to-r from-blue-100 via-teal-100 to-amber-100 dark:from-blue-900/50 dark:via-teal-900/50 dark:to-amber-900/50">
//           {product.images.length > 0 ? (
//             <ProductCarousel images={product.images} />
//           ) : (
//             <Image
//               src="/placeholder-image.png"
//               alt="Placeholder image"
//               fill
//               className="object-cover rounded-md"
//             />
//           )}
//         </div>
//         <div className="p-4 space-y-4 bg-white dark:bg-gray-800">
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">
//                 Price: ${product.cost}
//               </span>
//             </div>
//             <div className="space-y-1">
//               <div className="flex items-center space-x-2">
//                 <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
//                   Sizes:
//                 </span>
//                 <div className="flex gap-1">
//                   {product.size.length > 0 ? (
//                     product.size.map((size) => (
//                       <Badge
//                         key={size}
//                         variant="outline"
//                         className="text-teal-600 border-teal-300 dark:text-teal-400 dark:border-teal-700"
//                       >
//                         {size}
//                       </Badge>
//                     ))
//                   ) : (
//                     <span className="text-sm text-gray-500 dark:text-gray-400">
//                       N/A
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
//                   Category:
//                 </span>
//                 <div className="flex flex-wrap gap-1">
//                   {product.category.length > 0 ? (
//                     product.category.map((category) => (
//                       <Badge
//                         key={category}
//                         variant="outline"
//                         className="text-amber-600 border-amber-300 dark:text-amber-400 dark:border-amber-700"
//                       >
//                         {category}
//                       </Badge>
//                     ))
//                   ) : (
//                     <span className="text-sm text-gray-500 dark:text-gray-400">
//                       N/A
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <Dialog open={editModelOpen} onOpenChange={setEditModelOpen}>
//               <DialogTrigger asChild>
//                 <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700">
//                   <Edit className="h-4 w-4 mr-2" />
//                   Edit
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogTitle>Edit Product</DialogTitle>
//                 <AddProductForm
//                   product={product}
//                   callback={() => setEditModelOpen(false)}
//                 />
//               </DialogContent>
//             </Dialog>

//             <Dialog open={deleteModelOpen} onOpenChange={setDeleteModelOpen}>
//               <DialogTrigger asChild>
//                 <Button variant="destructive" className="flex-1">
//                   <Trash2 className="h-4 w-4 mr-2" />
//                   Delete
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Are you sure to delete?</DialogTitle>
//                   <DialogDescription>
//                     This action cannot be undone. This will permanently delete
//                     your product from servers.
//                   </DialogDescription>
//                 </DialogHeader>
//                 <div className="flex self-end gap-3 ml-auto">
//                   <Button onClick={() => setDeleteModelOpen(false)}>No</Button>
//                   <Button variant="destructive" onClick={handleDelete}>
//                     Yes
//                   </Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;
