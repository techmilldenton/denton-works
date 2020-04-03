import { FC } from 'react'

type Props = {
  text: string
}

export const Button: FC<Props> = props => <button>{props.text}</button>
