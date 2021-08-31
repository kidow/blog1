import React, { FunctionComponent } from 'react'

interface Props {
  id: string
  title: string
}
interface State {}

const ReContent: FunctionComponent<Props> = ({ id, title, children }) => {
  return (
    <div className="sm:flex sm:px-0 px-2">
      <div className="w-28 my-2 sm:w-56 mb-5">
        <h2 id={id} className="inline sm:leading-none sm:block text-2xl">
          <a className="mr-1 sm:mr-0" href={`#${id}`}>
            {title}
          </a>
        </h2>
        <span className="text-sm text-gray-600">{id}</span>
      </div>
      <div className="sm:flex-1">{children}</div>
    </div>
  )
}

export default ReContent
