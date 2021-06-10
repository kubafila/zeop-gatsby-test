import { Link } from 'gatsby'
import React from 'react'
import * as styles from './Menu.module.scss'
import SocialMedia from './SocialMedia'

const Menu = ({ scrollStarted}) => {
  const menuClass = scrollStarted ? `${styles.nav} ${styles.sticky}` : styles.nav;

  return (
    <nav className={menuClass}>
      <div className={styles.wrapper}>
       
        <div className={styles['nav__side']}>
          <Link to="/">Zeop.pl
        </Link></div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.link}>
              O nas
              </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.link}>
              Działania
            </Link>
          </li>
          <li className={styles.menuItem}><SocialMedia />
          </li>
          <li className={styles.menuItem}>
            <Link to="/blog" className={styles.link}>
              Blog
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.link}>
              Kontakt
            </Link>
          </li>
        </ul>
        <div className={styles['nav__side']}>Szukaj</div>
      </div>
    </nav>
  )
}

export default Menu
