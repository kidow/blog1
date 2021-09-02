import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import { ReFooter, ReHeader, ReComment, ReSEO } from 'components'

type Data = any

const Divider = () => <div className="my-10 w-full bg-gray-800 h-px" />

const BlogPostTemplate = ({ data, path }: PageProps<Data>) => {
  const post = data.markdownRemark
  const { previous, next } = data
  return (
    <>
      <ReSEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        thumbnail={post.frontmatter.thumbnail}
        url={decodeURI(path)}
      />
      <div className="container max-w-screen-sm mx-auto">
        <ReHeader />
      </div>
      <main className="container mx-auto max-w-screen-sm pb-10 relative">
        {/* <div className="absolute -left-40">
          <div className="fixed top-28">
            <div className="text-lg font-semibold">Kidow</div>
          </div>
        </div> */}
        <article
          itemScope
          itemType="http://schema.org/Article"
          className="px-6 md:px-0 mt-6"
        >
          <h1 itemProp="headline" className="font-bold md:text-5xl text-4xl">
            {post.frontmatter.title}
          </h1>
          <div className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
            {post.frontmatter.date}
          </div>
          <section
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="mt-10 text-lg leading-relaxed"
            id="markdown"
          />
        </article>
        <Divider />
        <div className="px-3 md:px-0 flex text-sm">
          {previous && (
            <div className="flex-1 text-left">
              <div className="text-gray-600">이전 글</div>
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="hover:underline"
              >
                {previous.frontmatter.title}
              </Link>
            </div>
          )}
          {next && (
            <div className="flex-1 text-right">
              <div className="text-gray-600">다음 글</div>
              <Link
                to={next.fields.slug}
                rel="next"
                className="hover:underline"
              >
                {next.frontmatter.title}
              </Link>
            </div>
          )}
        </div>
        <Divider />
        <div>
          <ReComment repo="kidow/blog" theme="github-dark" />
        </div>
      </main>
      <div className="bg-black">
        <div className="max-w-screen-sm mx-auto">
          <ReFooter />
        </div>
      </div>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 40)
      html
      frontmatter {
        title
        date(formatString: "YYYY. MM. DD")
        description
        thumbnail
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
