import z from "zod";

export const executeAuthSchema = z.object({
  email: z.string().email({ message: 'Formato de e-mail inválido.'}),
  password: z.string().min(4).max(15).nonempty()
})