import React from 'react'

import * as styles from './PartnersListItem.module.scss'

const PartnersListItem = ({  name, type, link, logo}) => {
  return (
    <li className={styles.partner}>

     <p>{name}</p>
     
    </li>
  )
}

export default PartnersListItem
