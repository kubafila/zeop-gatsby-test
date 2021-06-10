import React, { useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import * as styles from './Layout.module.scss'
import { isBrowser } from 'react-device-detect'
const Layout = ({children}) => {

  const isBrowser = typeof window !== "undefined"

  const [scrollStarted, setScrollStarted] = useState(false)
  

  const checkScrollTop = () => {
    if(!isBrowser){ return }

    if (window.pageYOffset >= 100) {
      setScrollStarted(true)
    } else {
      setScrollStarted(false)
    }
  };

  if (window){
    window.addEventListener('scroll', checkScrollTop)
  }
  
  return (
    <div className={styles.wrapper}>
      <Menu scrollStarted={scrollStarted}/>
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

