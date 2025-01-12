import { useState } from "react"

function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
      <button onClick={() => setLogin(true)}></button>
    </>
  )
}

export default App