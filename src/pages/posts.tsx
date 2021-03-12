import { ReCard, ReFooter, ReHeader, ReSEO } from 'components'
import { graphql, PageProps } from 'gatsby'
import React from 'react'

type Data = any

const PostsPage = ({ data }: PageProps<Data>) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <>
      <ReSEO title="All posts" />
      <ReHeader />
      <div className="min-h-screen">
        <div>
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
                      thumbnail="https://firebasestorage.googleapis.com/v0/b/kidow-v3.appspot.com/o/thumbnail%2F1615263205139?alt=media&token=4711f71a-f38a-4220-821d-145000fc2420"
                      url={post.fields.slug}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto">
          <ReFooter />
        </div>
      </div>
    </>
  )
}

export default PostsPage

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
          date(formatString: "YYYY년 MM월 DD일")
          title
          description
        }
      }
    }
  }
`
