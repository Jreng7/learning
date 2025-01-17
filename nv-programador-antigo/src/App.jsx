
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
        
      </form>
    </>
  )
}
