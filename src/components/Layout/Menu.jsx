import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as styles from './Menu.module.scss'
import SocialMedia from './SocialMedia'
import logo from '../../images/zeop-logo.svg'
import star from './../../images/star.svg'

const Menu = ({ scrollStarted}) => {
  
  const [menuFrosted, setMenuStyle] = useState(true);

  const handleMenuClick = () => {
    setMenuStyle(!menuFrosted);
  }

  let menuClass = `${styles.nav}  ${styles.sticky} ${menuFrosted ? styles.frosted : styles.white}`
  if (!scrollStarted) { menuClass = styles.nav; }



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
        <img src={star} width="40" height="40" onClick={() => {handleMenuClick()}}/>
      </div>
    </nav>
  )
}

export default Menu
