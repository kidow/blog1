import React, { createRef, FunctionComponent, useLayoutEffect } from 'react'

interface Props {
  repo: string
  theme: string
}
interface State {}

const ReComment: FunctionComponent<Props> = ({ repo, theme }) => {
  const ref = createRef<HTMLDivElement>()
  useLayoutEffect(() => {
    const utterances = document.createElement('script')
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo,
      theme,
      'issue-term': 'pathname',
      label: 'comments',
      crossOrigin: 'anonymous',
      async: 'true'
    }
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })
    if (ref.current) ref.current.appendChild(utterances)
  }, [repo])
  return <div ref={ref} />
}

ReComment.displayName = 'Utterances'

export default ReComment
