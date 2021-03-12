import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  title: string
  meta?: any[]
  lang?: string
  description?: string
}

const ReSEO: React.FunctionComponent<Props> = ({
  description,
  lang,
  meta,
  title
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ``}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta!)}
    />
  )
}

export default ReSEO
