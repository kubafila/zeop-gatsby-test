import React from 'react'

import * as styles from './PartnersListItem.module.scss'

const PartnersListItem = ({  name, type, link, logo}) => {

  const logoURL = logo.localFile.childImageSharp.fixed.src
  return (
    <li className={styles.partner}>
      <a href={link} className={styles.link}>
      <img src={logoURL} width="200" className={styles.image} alt={name}/>
      </a>
    </li>
  )
}

export default PartnersListItem
