import React from "react"
import { Link, Outlet } from "react-router-dom"

import Navbar from "../ components/Navbar"
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import Footer from "../ components/Footer"

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent  px-0">
      <div className="flex">
        <img
          src="/images/logo.png"
          alt=""
          className="object-contain lg:w-[9rem] mr-auto lg:ml-12 my-2"
        />

        <Navbar />
      </div>

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
