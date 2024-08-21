import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/> 
    <Outlet /> {/* Outlet jaha hai vaha ki jija change kar sakte hai (header and footer fix rahe ga sabhi page par)*/}
    <Footer />
    </>
  )
}

export default Layout
// Outlet dena se hum log nesting perform kar sakte hai
// Nesting karne ke liya main.jsx me top level Layout.jsx component denga uske andar child components