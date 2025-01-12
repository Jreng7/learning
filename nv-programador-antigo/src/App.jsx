
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <>
      <form>
        <p>Nome:</p>
        <input type="text" onChange={(e) => {setNome(e.target.value)}}/>
        
        <br />

        <p>E-mail:</p>
        <input type="email" onChange={(e) => {setEmail(e.target.value)}}/>

        <br />

        <p>Mensagem</p>
        <textarea placeholder="Digite sua mensagem:" onChange={(e) => {setMensagem(e.target.value)}}></textarea>

        <br /><br />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
