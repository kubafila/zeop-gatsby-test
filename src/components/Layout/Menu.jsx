import { Link } from 'gatsby'
import React from 'react'
import * as styles from './Menu.module.scss'
import SocialMedia from './SocialMedia'
import logo from '../../images/zeop-logo.svg'

const Menu = ({ scrollStarted}) => {
  const menuClass = scrollStarted ? `${styles.nav} ${styles.sticky}` : styles.nav;

  return (
    <nav className={menuClass}>
      <div className={styles.wrapper}>
       
        <div className={styles.side}>
          <Link to="/">
            <img src={logo} alt="logo" width="125" />
        </Link>
        
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.link}>
              O nas
              </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/#initiatives" className={styles.link}>
              Działania
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link to="/blog" className={styles.link}>
              Blog
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/#contact" className={styles.link}>
              Kontakt
            </Link>
          </li>
        </ul>
        <div className={styles.side}>
          <SocialMedia />
        </div>
      </div>
    </nav>
  )
}

export default Menu
