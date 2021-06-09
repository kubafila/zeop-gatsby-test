import React from 'react'
import * as styles from './InitiativesListitem.module.scss'

const InitiativesListitem = ({homepageInitiatives:{ title, description, image, link = "#"}}) => {
  return (

    <article>
      <a href={link} className={styles.initiative}>
        <div className={styles['imageWrapper']}>
          <img src={image.mediaItemUrl} alt={title} className={styles['image']}/>
        </div>
        <div>
        <h2 className={styles.title}>{title}</h2>
          <div className={styles.text}>
            <div dangerouslySetInnerHTML={{ __html: description }}>
          </div>
      </div>

      </div>
      </a>
        
    </article>
  )
}

export default InitiativesListitem
