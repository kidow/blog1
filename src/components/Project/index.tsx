import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

interface Props {
  title: string
  date: string
  link: string
  image?: string
  tags?: string[]
}
interface State {}

const ReProject: FunctionComponent<Props> = ({
  title,
  date,
  link,
  image,
  children,
  tags
}) => {
  return (
    <div className="mb-10">
      <div className="flex gap-3">
        {!!image && (
          <div>
            <Link to={link} target="_blank">
              <img
                className="w-11 h-11 rounded-full"
                src={image}
                alt="company"
              />
            </Link>
          </div>
        )}
        <div>
          <div className="text-lg">
            <Link to={link} target="_blank" className="hover:underline">
              {title}
            </Link>
          </div>
          <div className="text-xs text-gray-500 mb-3">{date}</div>
        </div>
      </div>
      <div className="leading-8 text-gray-400 mb-1">{children}</div>
      {!!tags && (
        <div className="flex gap-3">
          {tags.map((item, key) => (
            <div
              key={key}
              className="py-0.5 px-2 rounded-xl text-sm bg-gray-800 text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReProject
