"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { formSchema } from "../utils/validationSchema";

export const editBBSAction = async ({
  id,
  title,
  content,
}: { id: number } & z.infer<typeof formSchema>) => {
  await fetch(`${process.env.BACKEND_API_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  revalidatePath(`/posts/${id}`);
};
