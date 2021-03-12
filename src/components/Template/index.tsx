import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import { ReFooter, ReHeader } from 'components'

type Data = any

const Divider = () => <div className="my-10 w-full bg-gray-700 h-px" />

const BlogPostTemplate = ({ data, location }: PageProps<Data>) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <>
      <div className="container max-w-screen-sm mx-auto">
        <ReHeader />
      </div>
      <main className="container mx-auto max-w-screen-sm pb-10">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/kidow-v3.appspot.com/o/thumbnail%2F1615263205139?alt=media&token=4711f71a-f38a-4220-821d-145000fc2420"
          alt="thumbnail"
          className="object-cover h-full w-full"
        />
        <article
          itemScope
          itemType="http://schema.org/Article"
          className="px-6 md:px-0 mt-6"
        >
          <h1 itemProp="headline" className="font-bold md:text-5xl text-4xl">
            {post.frontmatter.title}
          </h1>
          <div className="text-gray-500 mt-1 md:mt-2 text-xs md:text-sm">
            <div>{post.frontmatter.date}</div>
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
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            </div>
          )}
          {next && (
            <div className="flex-1 text-right">
              <div className="text-gray-600">다음 글</div>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </div>
          )}
        </div>
        <Divider />
        <div className="text-xs md:text-sm shadow-sm text-gray-400 font-medium bg-black rounded-lg p-4">
          <div className="flex">
            <div className="mr-2">☕</div>
            <div>
              <p>
                제 포스팅이 도움이 되셨다면, 아래 버튼을 눌러{' '}
                <b className="text-gray-100">커피 한 잔</b>을 후원해주세요! 더
                좋은 글을 발행하는 데 큰 도움이 됩니다.
              </p>
              <a href="https://ko-fi.com/Z8Z63QW6Y" target="_blank">
                <img
                  style={{ border: 0 }}
                  className="mt-4 h-8"
                  src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </div>
          </div>
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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