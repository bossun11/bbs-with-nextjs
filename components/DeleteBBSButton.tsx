"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type DeleteBBSButtonProps = {
  id: number;
};

const DeleteBBSButton = ({ id }: DeleteBBSButtonProps) => {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/post/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    router.push("/");
    router.refresh();
  };

  return (
    <Button variant="destructive" onClick={() => handleDelete(id)}>
      削除
    </Button>
  );
};

export default DeleteBBSButton;
