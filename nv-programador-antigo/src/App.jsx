import { useState } from 'react';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [operacao, setOperacao] = useState('');
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function handleSubmit(e){
    e.preventDefault();

    switch (operacao) {
      case '+':
        setResultado(num1 + num2)
        break;

      default:
        break;
    }

  }


  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="number" onChange={(e) => {setNum1(e.target.value)}} value={num1}/>

        <select onChange={(e) => {setOperacao(e.target.value)}} value={operacao}>
          <option value="">--Selecione a operação--</option>
          <option value="+">+</option>  
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select> 

        <input type="number" onChange={(e) => {setNum2(e.target.value)}} value={num2}/>
        <button type="submit" onChange={(e) => {setResultado(e.target.value)}}>Calcular</button><b>Resultado:</b>{resultado}

      </form>
    </>
  )
}
