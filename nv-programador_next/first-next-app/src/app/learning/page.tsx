'use client';

import { useState } from 'react'
import Button from "../components/ButtonChatOnline";
import { Fragment } from "react";

export default function Example(){

  const [cor, setCor] = useState('blue')

  function alertar(){
    setCor('red')
  }

  return (
    <Fragment>
      <Button clicou={() => alertar()}>Teste</Button>

      <div style={{background: cor, width: 100, height: 100}}></div>
    </Fragment>
  )
}

