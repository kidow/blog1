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
  url
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
    'https://firebasestorage.googleapis.com/v0/b/kidow-v3.appspot.com/o/thumbnail%2Fsignboard.png?alt=media'
  const URL = 'https://kidow.me' + url
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
