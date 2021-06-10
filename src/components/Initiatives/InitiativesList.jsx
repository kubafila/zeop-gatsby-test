import React from 'react'
import InitiativesListItem from './InitiativesListitem'
import * as styles from './InitiativesList.module.scss'

const InitiativesList = ({nodes}) => {
  return (
    <section className={styles["initiativesList"]}>
      <h2>Nasze działania</h2>
      {nodes.map(node => (
        <InitiativesListItem {...node}/>
      ))}
      </section>
  )
}

export default InitiativesList


