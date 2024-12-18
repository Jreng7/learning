// props: { author: "Joaquim" }

export function Post(props){
  return (
    <div> 
      <h1>{props.nome}</h1>
      <h3>{props.algumaCoisa}</h3>
    </div>

  )
}

/*  
  
  1) === Diferença entre "Default Exports" e "Named Exports" ===

  Nesse exemplo acima foi usado "default exports" ele tem a vantagem de quando
  for importado no arquivo App.jsx você pode dar o nome que quiser, veja exemplo.

  import NomeQualquer from './Post' ao invés de import Post from './Post'
 
  Agora, o Named Exports.

  simplesmente não faz o "export default Post".
  Ai o componente ficaria como no exemplo abaixo.

  export function Post(){
    return <h1>Olá, como vai?</h1>
  }

  Veja que o "export" ficou na frente do nome da função e não é necessário colocar "default"
  apenas export.
  
  PORÉM, no App.jsx quando ele for importado não pode fazer simplesmente assim: 
  import Post from './Post' o nome do componente precisa estar entre chaves { NomeComponente }

  Ex.: import { Post } from './Post'
  O nome do componente importado (nesse exemplo é Post) precisa ser exatamente igual ao nome do componente.
 
*/

/*
  1) O que são props? R: De forma simples e direta:
 
  props são parâmetros que uma "função componente" recebe.
  aqui, nesse arquivo a função componente é a Props.

  O React passa props como um objeto que contém todas as informações enviadas para o componente.

  Ou seja, o componente recebe um objeto.

  Na prática:

  1. Parâmetro → props é o nome do parâmetro que recebe os dados. (pode ser qual nome, exemplo: ParametroRecebeDados)
  2. Objeto → props é um objeto que carrega os dados.
  3. Uso → props permite acessar as informações recebidas e renderizá-las, ou seja, o "ParametroRecebeDados" (caso esse seja o nome)
  recebe todos os dados (informações) passadas a ele lá no componente principal onde ele foi importado. App.jsx

  Exemplo:
  Se você passar <Post name="João" />, o props vira:

  props = { name: "João" }

*/
