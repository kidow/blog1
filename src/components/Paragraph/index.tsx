import React, { FunctionComponent } from 'react'

interface Props {}
interface State {}

const ReParagraph: FunctionComponent<Props> = ({ children }) => {
  return <p className="mb-5">{children}</p>
}

export default ReParagraph
