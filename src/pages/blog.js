import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from '../components/Layout/Layout'

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Lista wpisów</h1>
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
        </div>
      ))}
    </Layout>
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