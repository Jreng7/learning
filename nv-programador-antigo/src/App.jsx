
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log(nome, email, mensagem);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Nome:</p>
        <input type="text" onChange={(e) => {setNome(e.target.value);}} value={nome}/>
        
        <br />

        <p>E-mail:</p>
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        <br />

        <p>Mensagem</p>
        <textarea placeholder="Digite sua mensagem:" onChange={(e) => {setMensagem(e.target.value)}}>
          {mensagem}
        </textarea>

        <br /><br />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
