import React from 'react'
import * as styles from './SocialMedia.module.scss'
import { useStaticQuery, graphql } from "gatsby"


const SocialMedia = ({ nodes }) => {


  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allWpSocial {
        nodes {
          homepageSocial {
            name,
            link
          }
          id
        }
      }
    }
  `)


  return (
    <section>
      <pre>
       
      </pre>
      <ul className={styles['list']}>
        {data.allWpSocial.nodes.map(({ id, homepageSocial: { name, link } }) => (<li key={id}><a href={link}>{name}</a></li>))}
      </ul>
    </section>
  )
}

export default SocialMedia

