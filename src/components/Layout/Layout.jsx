import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import * as styles from './Layout.module.scss'
const Layout = ({children}) => {
  return (
    <>
      <Menu />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout

