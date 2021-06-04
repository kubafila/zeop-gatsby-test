import React from 'react'

const InitiativesListitem = ({homepageInitiatives:{ title, description, image}}) => {
  return (
    <article>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      <img src={image.mediaItemUrl}/>
    </article>
  )
}

export default InitiativesListitem
