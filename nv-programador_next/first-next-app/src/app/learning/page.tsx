'use client';

import Button from "../components/ButtonChatOnline";
import { Fragment } from "react";

export default function Example(){

  function alertar(){
    alert("O usuário clicou no botão")
  }

  return (
    <Fragment>
      <Button clicou={() => alertar()}>Teste</Button>
    </Fragment>
  )
}

