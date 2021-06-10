import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from '../components/Layout/Layout'
import * as styles from './blog.module.scss'

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Lista wpisów</h1>
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug} className={styles.post}>
          <Link to={node.slug}>
            <p><i>{node.date}</i> | {node.title}</p>
            <br /> 
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC}) {
      nodes {
        title
        excerpt
        slug,
        date(fromNow: true, locale: "pl")
        featuredImage {
        node {
          srcSet
        }
      }
      }
    }
  }
`