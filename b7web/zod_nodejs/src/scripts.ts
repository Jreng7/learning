
import z from 'zod'

const patternValues = z.object({
  name: z.string(),
  age: z.number(),
  active: z.boolean(),
  birthDate: z.date(),
  qualquer: z.any(),
  email: z.string().email().optional(),
  salario: z.literal(1525) // Literal é quando o valor dentro DEVE ser igual ao que será passado no "parse"
})

const result = patternValues.parse({
  name: "John Doe"
})

console.log(result)