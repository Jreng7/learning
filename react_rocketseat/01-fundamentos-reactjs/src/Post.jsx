function Post(){
  return (
    <h1>Olá, como vai?</h1>
  );
}

export default Post

/*  
  
  Diferença entre "Default Exports" e "Named Exports"
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
  
 
*/