import { useState } from 'react';

export default function App() {

  const [num1, setNum1] = useState(0);
 
  return (
    <>
      <form>

        <input type="number" />

        <select>
          <option value="">--Selecione a operação--</option>
          <option value="+">+</option>  
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>

        <input type="number" />
        <button type="submit">Calcular</button>

      </form>
    </>
  )
}
