"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { formSchema } from "../utils/validationSchema";

export const postBBSAction = async ({
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await fetch(`${process.env.BACKEND_API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  revalidatePath("/");
  redirect("/");
};
