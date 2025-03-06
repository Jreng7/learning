
import z from 'zod'

const patternValues = z.object({
  name: z.string(),
  age: z.number(),
  active: z.boolean(),
  birthDate: z.date(),
  qualquer: z.any(),
  email: z.string().email().optional() 
})

const result = patternValues.parse({
  name: "John Doe"
})

console.log(result)