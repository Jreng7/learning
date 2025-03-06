import z from 'zod'

// Greater Than = GT  ( Maior que )
// Lower Than = LT   ( Menor que )
// Greater Than or Equal = GTE  ( Maior que ou igual a )
// Lower Than or Equal = LTE

const schema = z.object({

  age: z.number().gt(17), // Tem que ter mais de 17 anos.
  age1: z.number().gte(18), // Aqui o GTE diz que precisa ter 18 ou mais!
  age2: z.number().lte(17) // Mesma coisa do GTE, porém, o LTE é para MENOR ou IGUAL ao número passado (determinado no z.lte() )

})

type User = z.infer<typeof schema>

let data: User = {
  age: 19,
  age1: 18,
  age2: 15
}

let resultado = schema.parse(data)

console.log(resultado)