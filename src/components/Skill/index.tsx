import React, { FunctionComponent } from 'react'

interface Props {
  title: string
  description: string
}
interface State {}

const ReSkill: FunctionComponent<Props> = ({
  children,
  title,
  description
}) => {
  return (
    <div className="flex mb-5">
      <div className="flex-1 mt-1">
        <div className="text-lg">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="flex-1 text-gray-400 leading-8">{children}</div>
    </div>
  )
}

export default ReSkill
