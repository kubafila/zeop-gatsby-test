import React from 'react'
import InitiativesListItem from './InitiativesListitem'
import * as styles from './InitiativesList.module.scss'

const InitiativesList = ({nodes}) => {
  return (
    <section className={styles["initiativesList"]} id="initiatives">
      <h2>Nasze działania</h2>
      {nodes.map(node => (
        <InitiativesListItem {...node} key={node.id}/>
      ))}
      </section>
  )
}

export default InitiativesList


