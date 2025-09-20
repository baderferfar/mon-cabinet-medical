import { z } from "zod";

export const formSchema = z.object({
  nom: z.string().min(2).max(50),
  email: z.string().email(),
  telephone: z.string().min(10).max(15),
  soin: z.string().min(2).max(50),
  message: z.string().min(2).max(500), 
});