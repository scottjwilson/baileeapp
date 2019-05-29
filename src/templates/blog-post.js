import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <h1>{post.title}</h1>

        <Img fixed={post.image.fixed} />

        {/* <div
          dangerouslySetInnerHTML={{
            __html: post.content.childContentfulRichText.html,
          }}
        /> */}

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ContentfulPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    contentfulPost(slug: { eq: $slug }) {
      title
      author
      image {
        fixed(width: 250) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`
export default BlogPostTemplate
