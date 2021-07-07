import React, { useState } from 'react'
import { Link } from "gatsby" 
import * as styles from './Post.module.scss'

const Post = ({title, date, excerpt, slug, featuredImage}) => {

  return ( 
    <li className={styles.post}>
      <Link to={slug}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p className={styles.date}>
        <span className={styles.dateBold}>Data: </span>
        <span className={styles.dateLight}>{date}</span></p>
      <p dangerouslySetInnerHTML = {{ __html: excerpt }}></p>
    </li>
   );
}
 
export default Post;