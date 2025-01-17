
import { useState } from 'react'

export default function App() {

  const [logged, setLogged] = useState(false);


  return (

    <>
      {logged && <p>Promoções do dia.</p> }

      {!logged && 
        <p>Você não está logado, por favor, faça login.</p>
      }
    </>

  );
}
