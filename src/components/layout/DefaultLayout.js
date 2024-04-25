import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div>
      <Header />
        <div className="main">
            {children}
        </div>
        <Footer />
      
    </div>
  )
}

export default DefaultLayout

