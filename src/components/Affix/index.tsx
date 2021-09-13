import React, { FunctionComponent } from 'react'

interface Props {
  headings: string[]
  hash: string
}

const ReAffix: FunctionComponent<Props> = ({ headings, hash }) => {
  return (
    <div className="absolute -left-48">
      <div className="fixed top-28">
        <div className="text-lg font-light text-gray-500 w-40">
          {headings.map((item, key) => (
            <div key={key}>
              <a
                className={`inline-block hover:text-gray-300${
                  hash === `#${item}` ? ' text-gray-300 text-xl' : ''
                }`}
                href={`#${item}`}
              >
                {item.replaceAll('-', ' ')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReAffix
