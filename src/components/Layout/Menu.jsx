import React from 'react'
import * as styles from './Menu.module.scss'
import SocialMedia from './SocialMedia'

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav__side']}><a href="/">Logo</a></div>
      <ul className={styles.menu}>
        <li className={styles['menu__item']}><a href="#" className={styles['menu__link']}>O nas</a></li>
        <li className={styles['menu__item']}><a href="#" className={styles['menu__link']}>Działania</a></li>
        <li className={styles['menu__item']}><SocialMedia /></li>
        <li className={styles['menu__item']}><a href="/blog" className={styles['menu__link']}>Blog</a></li>
        <li className={styles['menu__item']}><a href="#" className={styles['menu__link']}>Kontakt</a></li>
      </ul>
      <div className={styles['nav__side']}>Szukaj</div>
    </nav>
  )
}

export default Menu
