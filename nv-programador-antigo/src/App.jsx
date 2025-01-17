import { useState } from 'react';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [operacao, setOperacao] = useState('');
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);


  return (
    <>
      <form>

        <input type="number" onChange={(e) => {setNum1(e.target.value)}}/>

        <select>
          <option value="">--Selecione a operação--</option>
          <option value="+">+</option>  
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select> 

        <input type="number" />
        <button type="submit">Calcular</button><b>Resultado:</b>{resultado}

      </form>
    </>
  )
}
