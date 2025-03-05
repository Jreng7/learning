import z from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18).max(120) // .min() do z.number() é diferente do .min() "string()" ele checa idade min e max.
})


type User = z.infer<typeof schema>


let data: User = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  age: 35
}

const resultado = schema.parse(data)
console.log(resultado)  