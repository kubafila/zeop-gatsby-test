import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from '../components/Layout/Layout'
import Post from '../components/Post/Post'
import * as styles from './blog.module.scss'

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Lista wpisów</h1>
      <ul className={styles.list}>
        {data.allWpPost.nodes.map(data => (
          <Post {...data} key={data.id} />))}
      </ul>
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
        id,
        date(locale: "pl-PL", formatString: " D MMMM YYYY")
        featuredImage {
        node {
          sourceUrl
        }
      }
      }
    }
  }
`