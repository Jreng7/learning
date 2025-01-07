'use client';

import { Fragment } from "react";

export default function Example(){

  function alertar(){
    alert("O usuário clicou no botão.")
  }
  

  return (
    <Fragment>
      <button onClick={() => alertar()}>Enviar</button>
    </Fragment>
  )
}

