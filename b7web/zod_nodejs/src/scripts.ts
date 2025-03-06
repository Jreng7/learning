
import z from 'zod'

const patternValues = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  age: z.number().min(18).max(120),
  active: z.boolean(),
  url: z.string().url(),
  birthDate: z.coerce.date(),
  qualquer: z.any().optional(),
  endereco: z.string().min(2).max(25).toLowerCase(),
  email: z.string().email().optional(),
  salario: z.literal(1525) // Literal é quando o valor de dentro do "z.literal(1525)" DEVE ser igual ao que será passado no "parse"
})

const result = patternValues.parse({
  name: "John Doe",
  age: 35,
  active: true,
  url: 'http://www.google.com.br',
  birthDate: '1995-05-25',
  endereco: 'Rua ESTADOS unidos',
  email: 'visacard@gmail.com',
  salario: 1525
})

console.log(result)