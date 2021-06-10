import React from 'react'

import * as styles from './PartnersListItem.module.scss'

const PartnersListItem = ({  name, type, link, logo}) => {

  const logoURL = logo.localFile.childImageSharp.resize.src
  return (
    <li className={styles.partner}>
        <img src={logoURL} width="200" height="200" />

    </li>
  )
}

export default PartnersListItem
