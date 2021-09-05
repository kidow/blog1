import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { IPost } from 'types'
import cheerio from 'cheerio'

interface Props extends IPost {}
interface State {}

const ReCard: FunctionComponent<Props> = ({
  title,
  description,
  url,
  date,
  html
}) => {
  const $ = cheerio.load(html || '<p></p>')
  return (
    <li className="w-1/2 md:w-1/4 pb-10 md:px-1.5 px-1">
      <Link className="flex flex-col h-full relative" to={url} itemProp="url">
        <div className="flex flex-col">
          <h2
            itemProp="headline"
            className="font-bold text-base md:text-lg text-gray-100 flex-1 mb-4 leading-6 hover:underline"
          >
            {title}
          </h2>
          <p
            className="text-sm md:text-base text-gray-500 line-clamp-3"
            itemProp="description"
          >
            {description}
          </p>
        </div>
        <div className="mt-1">
          <div className="text-xs text-gray-300">{date}</div>
        </div>
      </Link>
    </li>
  )
}

export default ReCard
