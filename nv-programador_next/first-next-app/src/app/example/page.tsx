'use client'

import { useState } from 'react'

import ButtonChatOnline from '../components/ButtonChatOnline'

export function Example(){

  const [cor, setCor] = useState("blue")

  function alertar(){
    setCor("red")
  }

  return (
    <div>
      <ButtonChatOnline clicou={() => alertar()}/>
    </div>
  )
}