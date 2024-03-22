import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "タイトルは2文字以上で入力してください" })
    .max(100, { message: "タイトルは100文字以下で入力してください" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上で入力してください" })
    .max(1000, { message: "本文は1000文字以下で入力してください" }),
});
