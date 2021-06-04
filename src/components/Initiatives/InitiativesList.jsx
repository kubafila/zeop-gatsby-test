import React from 'react'
import InitiativesListItem from './InitiativesListitem'
// import data from '../../data/InitiativesList'


const InitiativesList = ({nodes}) => {
  return (
    <div>
      {nodes.map(node => (
        <InitiativesListItem {...node}/>
      ))}
      </div>
  )
}

export default InitiativesList


