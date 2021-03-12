import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

interface Props {
  title: string
  description: string
  url: string
  date: string
  thumbnail: string
}
interface State {}

const ReCard: FunctionComponent<Props> = ({
  title,
  description,
  url,
  date,
  thumbnail
}) => {
  return (
    <li className="w-1/2 md:w-1/4 pb-10 md:px-1.5 px-1">
      <Link className="flex flex-col h-full relative" to={url} itemProp="url">
        <div
          className="overflow-hidden block round relative w-full"
          style={{ marginBottom: '.375rem' }}
        >
          <div
            className="relative overflow-hidden"
            style={{ paddingTop: '75%' }}
          >
            <span className="h-full w-full absolute block inset-0">
              <img
                src={thumbnail}
                alt="thumbnail"
                className="object-cover h-full w-full rounded-lg"
              />
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h4
            itemProp="headline"
            className="font-bold text-sm md:text-base text-gray-100 flex-1"
          >
            {title}
          </h4>
          <p
            className="text-sm text-gray-500 truncate"
            itemProp="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="mt-1">
          <div className="text-xs text-gray-500">{date}</div>
        </div>
      </Link>
    </li>
  )
}

export default ReCard
