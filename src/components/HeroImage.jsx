import React from 'react'
import * as styles from './HeroImage.module.scss'
import logo from './../images/logo-desktop.svg'

const HeroImage = () => {
  return (
    <div className={styles.imageWrapper}>
      <img src ={logo} alt='Stowarzyszenie Z energią o prawie' className={styles.image} />

    </div>
  )
}

export default HeroImage
