type HeaderProps = {
  nomeDoCliente?: string;
}

export function Header(props: HeaderProps){

  return (
    <>
      <header>
        <h1>{props.nomeDoCliente}</h1>
      </header>
    </>
  )
}
