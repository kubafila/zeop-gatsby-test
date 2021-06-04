import React from 'react'
// import data from '../../data/PartnersList'
import PartnersListItem from './PartnersListItem'
import * as styles from './PartnersList.module.scss'


const PartnersList = ({ nodes }) => {

  const showPartnerType = (type) => {
    const result = nodes.filter(node => node.homepagePartners.type === type.toUpperCase())

    return (
      <ul className={styles.list}>
        {result.map(node => (
          <PartnersListItem {...node.homepagePartners} key={node.id} />
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h1>Wspierają nas</h1>
      <h2>Honorowe</h2>
        {showPartnerType('HONORARY')}
      <h2>Medialne</h2>
        {showPartnerType('MEDIA')}
      <h2>Zwykłe</h2>
        {showPartnerType('NORMAL')}
    </div>
  )
}

export default PartnersList
