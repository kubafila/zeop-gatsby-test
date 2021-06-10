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
    <section>
      <h2>Wspierają nas</h2>
      <h3>Honorowe</h3>
        {showPartnerType('HONORARY')}
      <h3>Medialne</h3>
        {showPartnerType('MEDIA')}
      <h3>Zwykłe</h3>
        {showPartnerType('NORMAL')}
    </section>
  )
}

export default PartnersList
