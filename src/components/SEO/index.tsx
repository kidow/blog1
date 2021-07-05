import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  title?: string
  meta?: any[]
  description?: string
  thumbnail?: string
  url?: string
}

const ReSEO: React.FunctionComponent<Props> = ({
  description = '',
  meta = [],
  title,
  thumbnail,
  url = ''
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const DESCRIPTION = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const IMAGE =
    thumbnail ||
    `https://dynamisign.com/api/sign?d=1%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC%20%EA%BF%88%EA%BE%B8%EB%8A%94%20%EC%9B%B9%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9E%85%EB%8B%88%EB%8B%A4.&t=Kidow's%20%EA%B0%9C%EB%B0%9C%20%EB%B8%94%EB%A1%9C%EA%B7%B8`
  const URL = `https://kidow.me${url}`
  return (
    <Helmet
      htmlAttributes={{ lang: 'ko' }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ``}
      meta={[
        { name: `description`, content: DESCRIPTION },
        { property: `og:title`, content: title },
        { property: 'og:site_name', content: title },
        { property: `og:description`, content: DESCRIPTION },
        { property: `og:type`, content: `website` },
        { property: 'og:image', content: IMAGE },
        { property: 'og:url', content: URL },
        { property: `twitter:card`, content: `summary` },
        { property: `twitter:title`, content: title },
        { property: `twitter:description`, content: DESCRIPTION },
        { property: `twitter:domain`, content: URL },
        { property: `twitter:image`, content: IMAGE }
      ].concat(meta)}
    />
  )
}

export default ReSEO
