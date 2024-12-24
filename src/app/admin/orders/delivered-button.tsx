"use client";
import { changeOrderStatus, deleteOrder } from "@/app/actions/order";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {
  orderId: string;
  status: string;
};

const DeliveryButton = ({ orderId, status }: Props) => {
  const router = useRouter();
  const [isMarking, setIsMarking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelivery = async () => {
    setIsMarking(true);
    const response = await changeOrderStatus(orderId, "Delivered");

    if (response.status == 202) {
      toast("Success", {
        description: "Order Marked as Delivered",
      });
      router.refresh();
    } else {
      toast("Error", {
        description: "Something went wrong!",
      });
    }
    setIsMarking(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    const response = await deleteOrder(orderId);

    if (response.status == 202) {
      toast("Success", {
        description: "Order Deleted",
      });
      router.refresh();
    } else {
      toast("Error", {
        description: "Something went wrong!",
      });
    }
    setIsDeleting(false);
  };

  return status === "Pending" ? (
    <Button onClick={handleDelivery}>
      {isMarking ? "Marking..." : "Mark as Delivery"}
    </Button>
  ) : (
    <div className="flex items-center gap-2">
      <Button
        variant="destructive"
        disabled={isDeleting}
        onClick={handleDelete}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
};

export default DeliveryButton;
