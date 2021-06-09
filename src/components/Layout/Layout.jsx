import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import * as styles from './Layout.module.scss'
const Layout = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <Menu />
      <main className={styles.main}>
        {children}
      </main>
      <Footer>
        Stopka storny
        </Footer>
    </div>
  )
}
export default Layout

