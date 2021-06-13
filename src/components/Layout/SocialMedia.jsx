import React from 'react'
import * as styles from './SocialMedia.module.scss'
import { useStaticQuery, graphql } from "gatsby"


const SocialMedia = ({ nodes }) => {


  const data = useStaticQuery(graphql`
    query HeaderQuery {
  allWpSocial {
    nodes {
      homepageSocial {
        link
        icon {
          sourceUrl
        }
        iconHover {
          sourceUrl
        }
      }
    }
  }
}

  `)


  return (
      <ul className={styles['list']}>
        {data.allWpSocial.nodes.map(({ id, homepageSocial: { name, link, icon, iconHover } }) => (
          <li key={id} className={styles.item}>
            <a href={link}>
              <img src={icon.sourceUrl} alt={name} height="40" width="40" />
            </a>
          </li>
        ))}
      </ul>
  )
}

export default SocialMedia

