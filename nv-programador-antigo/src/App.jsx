

export default function App() {


  const usuarios = [
    {name: 'visa', lastName: 'card1'},
    {name: 'mastercard', lastName: 'card2'},
  ];


  return (
    <>

      {usuarios.map((itemArray) => {
        return (
          <>
            {itemArray.name} {itemArray.lastName} <br />
          </>
        ) 
      })}

    </>
  );
}
