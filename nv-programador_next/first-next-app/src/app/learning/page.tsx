'use client';

import ButtonChatOnline from "../components/ButtonChatOnline";
import { Fragment } from "react";

export default function Example(){

  function alertar(){
    alert("O usuário clicou no botão.")
  }
  

  return (
    <Fragment>
      <ButtonChatOnline>
        
      </ButtonChatOnline>
    </Fragment>
  )
}

