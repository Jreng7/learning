// JSX = JavaScript + XML
import { Post } from './Post'

export function App() {
 
  return (
    <div>
      <Post 
        nome="Componente Post - Primeiro Post" 
        algumaCoisa="O interessante é que os atributos 'Props' podem conter qualquer nome, como aqui
        nesse componente, o nome do atributo foi 'algumaCoisa' e o conteúdo é todo esse texto aqui."
      />

      <Post 
        nome="Segundo Post" 
        algumaCoisa="OBS: É importante que o atributo seja o mesmo, entendeu?
        Estamos usando o mesmo componente 'Post' logo, lá dentro da 'função componente' tem props.nome
        e também props.algumaCoisa, logo, é imprescindível que todos os componentes Post tenha os mesmos
        atributos, caso eu faça <Post card='Visa'/> lá dentro do componente só está esperando props.nome e 
        props.algumaCoisa. Logo, não será passado.
      "/>
    </div>
  )
}

