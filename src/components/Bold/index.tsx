import { FunctionComponent } from 'react'

interface Props {}
interface State {}

const ReBold: FunctionComponent<Props> = ({ children }) => {
  return <b className="text-gray-300">{children}</b>
}

export default ReBold
