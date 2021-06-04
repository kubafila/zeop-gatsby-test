import React from 'react'

import * as styles from './PartnersListItem.module.scss'

const PartnersListItem = ({  name, type, link, logo}) => {
  return (
    <li className="partner" className={styles.partner}>

      {/* <img src={logo.sourceUrl} alt={name} width="100" height="auto"/> */}
     <p>{name}</p>
     
    </li>
  )
}

export default PartnersListItem
