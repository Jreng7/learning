import z from 'zod'

// Greater Then = GT  ( Maior que )
// Lower Then = LT   ( Menor que )
// Greater Then or Equal = GTE  ( Maior que ou igual a )

const schema = z.object({
  age: z.number().gt(17), // Tem que ter mais de 17 anos.
  age1: z.number().gte(18) // Aqui o GTE diz que precisa ter 18 ou mais!
})

type User = z.infer<typeof schema>

let data: User = {
  age: 19,
  age1: 18
}

let resultado = schema.parse(data)