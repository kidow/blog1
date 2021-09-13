import React, {
  createRef,
  FunctionComponent,
  memo,
  useLayoutEffect
} from 'react'

interface Props {}

const ReReaction: FunctionComponent<Props> = () => {
  const ref = createRef<HTMLDivElement>()
  useLayoutEffect(() => {
    const giscus = document.createElement('script')
    const attributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'kidow/blog',
      'data-repo-id': 'MDEwOlJlcG9zaXRvcnkzNDY5NzgxNDk=',
      'data-category': 'Show and tell',
      'data-category-id': 'DIC_kwDOFK53Zc4B_CdI',
      'data-mapping': 'title',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-theme': 'dark',
      crossOrigin: 'anonymous',
      async: 'true'
    }
    Object.entries(attributes).forEach(([key, value]) => {
      giscus.setAttribute(key, value)
    })
    if (ref.current) ref.current.appendChild(giscus)
  }, [])
  return <div ref={ref} />
}

ReReaction.displayName = 'Giscus'

export default memo(ReReaction)
