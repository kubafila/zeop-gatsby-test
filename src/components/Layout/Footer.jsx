import React from 'react'

import * as styles from './Footer.module.scss'

const Footer = ( {children} ) => {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  )
}

export default Footer
