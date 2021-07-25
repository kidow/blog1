import React, { FunctionComponent } from 'react'
import Tooltip from 'react-tooltip'

interface Props {
  content: string
}
interface State {}

const ReTooltip: FunctionComponent<Props> = ({ children, content }) => {
  return (
    <>
      <a data-tip={content}>{children}</a>
      <Tooltip place="top" type="dark" effect="float" />
    </>
  )
}

export default ReTooltip
