

export default function App() {

  const usuarios = [
    "Joaquim",
    "Silva",
    "Marcos"
  ];

  return (
    <>

      {usuarios.map(user => {
        return (
          <>
            {user}
          </>
        )
      })}


    </>
  );
}
