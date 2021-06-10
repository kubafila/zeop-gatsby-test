import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"


export default function BlogPost({ data }) {

  const post = data.allWpPost.nodes[0]
  let image = ""
  if (post.featuredImage.node !== null){
     image = post.featuredImage.node.localFile.childImageSharp.fluid.src
  }

  return (

    <Layout>
      <h1>{post.title}</h1>
      <br />
      <img src={image}  />
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
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`