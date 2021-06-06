import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (

    <Layout>
        <h1>{post.title}</h1>
        {/* <img src={post.featuredImage.node.sourceUrl} /> */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>

  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`