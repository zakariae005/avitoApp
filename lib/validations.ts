import * as z from "zod";

const CategoryEnum = z.enum(["voiture", "telephone", "appartement", "vetement"]);

export const annonceSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(10),
  price: z.coerce.number(),
  category: CategoryEnum,
  imageUrl: z.string()
});
