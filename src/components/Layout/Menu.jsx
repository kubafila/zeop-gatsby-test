import { Link } from 'gatsby'
import React from 'react'
import * as styles from './Menu.module.scss'
import SocialMedia from './SocialMedia'

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav__side']}><Link to="/">Zeop.pl</Link></div>
      <ul className={styles.menu}>
        <li className={styles['menu__item']}><Link to="#" className={styles['menu__link']}>O nas</Link></li>
        <li className={styles['menu__item']}><Link to="#" className={styles['menu__link']}>Działania</Link></li>
        <li className={styles['menu__item']}><SocialMedia /></li>
        <li className={styles['menu__item']}><Link to="/blog" className={styles['menu__link']}>Blog</Link></li>
        <li className={styles['menu__item']}><Link to="#" className={styles['menu__link']}>Kontakt</Link></li>
      </ul>
      <div className={styles['nav__side']}>Szukaj</div>
    </nav>
  )
}

export default Menu
