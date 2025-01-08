import { Fragment } from 'react'

type Props = {
  children?: string;
  clicou?: VoidFunction;
}

export default function ButtonChatOnline({ children, clicou}: Props){

  return (
    <Fragment>
      <button onClick={clicou}>{children}</button>
    </Fragment>
  )
} 