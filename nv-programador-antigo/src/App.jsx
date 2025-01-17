

export default function App() {
 
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
