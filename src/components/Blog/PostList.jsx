import React from "react"
import { Link, graphql } from "gatsby" //highlight-line

export default function Home({ data }) {
  return (
    <>
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
          {/* highlight-start */}
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          {/* highlight-end */}
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
  </>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`