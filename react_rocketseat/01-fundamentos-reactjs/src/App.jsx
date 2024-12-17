// JSX = JavaScript + XML
import { Post } from './Post'

export function App() {
 
  return (
    <div>
      <Post 
        nome="Rocketseat" 
        algumaCoisa="O interessante é que os atributos 'Props' podem conter qualquer nome, como aqui
        nesse componente, o nome do atributo foi 'algumaCoisa' e o conteúdo é todo esse texto aqui."
      />
    </div>
  )
}

