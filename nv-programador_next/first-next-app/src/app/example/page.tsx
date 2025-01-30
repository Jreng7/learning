'use client'

import { useState } from 'react'

export function Example(){

  const [email, setEmail] = useState("")

  return (

    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)}/>
    </div>

  ) 

} 