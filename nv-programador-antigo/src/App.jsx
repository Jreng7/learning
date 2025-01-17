import { useState, useEffect } from 'react';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [operacao, setOperacao] = useState('');
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    
    switch (operacao) {
      case '+':
        setResultado(num1 + num2)
        break;

      case '-':
        setResultado(num1 - num2)
        break;

      case '/':
        setResultado(num1 / num2)
        break;
      
      case '*':
        setResultado(num1 * num2)
        break;

      default:
        break;
    }


  }, [num1, num2, operacao])


  return (
    <>
    
        <input type="number" onChange={(e) => {setNum1(e.target.valueAsNumber)}} value={num1}/>

        <select onChange={(e) => {setOperacao(e.target.value)}} value={operacao}>
          <option value="">--Selecione a operação--</option>
          <option value="+">+</option>  
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select> 

        <input type="number" onChange={(e) => {setNum2(e.target.valueAsNumber)}} value={num2}/>
        <button type="submit">Calcular</button><b>Resultado:</b>{resultado}

    </>
  )
}
