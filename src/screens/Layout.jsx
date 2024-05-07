import React from "react"
import { Link, Outlet } from "react-router-dom"

import Navbar from "../ components/Navbar"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import Footer from "../ components/Footer"

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white  px-0">
      <div className="flex bg-gradient-to-b from-gray-200">
        <img
          src="/images/logo.png"
          alt=""
          className="object-contain lg:w-[17rem] mr-auto ml-3 mt-2"
        />

        <Navbar />
      </div>

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
