

export default function App() {

  
  const usuarios = [
    {name: 'visa'},
    {name: 'mastercard'},
  ];


  return (
    <>

      {usuarios.map((item) => {
        return (
          <>
          {item}
          </>
        ) 
      })}

    </>
  );
}
