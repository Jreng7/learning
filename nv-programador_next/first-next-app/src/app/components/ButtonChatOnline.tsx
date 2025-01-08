import { Fragment } from 'react'

type Props = {
  children?: string;
  clicou?: VoidFunction;
}

export default function ButtonChatOnline({ children, clicou}: Props){

  alert(children)

  return (
    <Fragment>
      <button onClick={clicou}></button>
    </Fragment>
  )
} 