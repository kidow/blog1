import { tag } from 'data'
import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { IPost } from 'types'
import cheerio from 'cheerio'
import ReTooltip from 'components/Tooltip'

interface Props extends IPost {}
interface State {}

const ReCard: FunctionComponent<Props> = ({
  title,
  url,
  date,
  thumbnail,
  tags,
  html
}) => {
  const $ = cheerio.load(html || '<p></p>')
  const description = $.text().substring(0, 100)
  return (
    <li className="w-1/2 md:w-1/4 pb-10 md:px-1.5 px-1">
      <div
        className="overflow-hidden round relative w-full flex"
        style={{ marginBottom: '.375rem' }}
      >
        {tags.map((item, key) => (
          <ReTooltip key={key} content={item}>
            <div
              className="rounded-full w-4 h-4 mr-1"
              // @ts-ignore
              style={{ background: tag[item] }}
            />
          </ReTooltip>
        ))}
      </div>
      <Link className="flex flex-col h-full relative" to={url} itemProp="url">
        <div className="flex flex-col">
          <h4
            itemProp="headline"
            className="font-bold text-sm md:text-lg text-gray-100 flex-1 mb-4 leading-6"
          >
            {title}
          </h4>
          <p
            className="text-sm text-gray-500 line-clamp-3"
            itemProp="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="mt-1">
          <div className="text-xs text-gray-300">{date}</div>
        </div>
      </Link>
    </li>
  )
}

export default ReCard
