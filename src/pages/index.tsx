import * as React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { ReCard, ReFooter, ReHeader, ReSEO } from 'components'

type Data = any

const IndexPage = ({ data }: PageProps<Data>) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <>
      <ReSEO title="개발 블로그" />
      <ReHeader />
      <div className="container mx-auto md:px-0 px-6">
        <a
          href="https://blog.kidow.me"
          target="_blank"
          className="p-4 block bg-gray-600 text-gray-200 rounded-lg mb-4"
        >
          블로그를 이전했습니다. (클릭 시 이동)
        </a>
      </div>
      <div className="min-h-screen">
        <div className="container mx-auto">
          <div className="md:px-0 px-6">
            <ul className="flex flex-wrap -mx-1 md:-mx-1.5">
              {posts.map((post: any) => {
                const title = post.frontmatter.title || post.fields.slug
                return (
                  <ReCard
                    key={post.fields.slug}
                    title={title}
                    date={post.frontmatter.date}
                    description={post.frontmatter.description || post.excerpt}
                    thumbnail={post.frontmatter.thumbnail || ''}
                    url={post.fields.slug}
                    html={post.html}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      {posts.length > 12 && (
        <div className="h-20 flex items-center justify-center mx-auto">
          <Link to="/posts">
            <button className="text-center w-72 p-3 text-sm rounded bg-gray-800">
              게시글 전체보기
            </button>
          </Link>
        </div>
      )}
      <div className="bg-black">
        <div className="container mx-auto">
          <ReFooter />
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY. MM. DD")
          title
          description
          thumbnail
        }
        html
      }
    }
  }
`
