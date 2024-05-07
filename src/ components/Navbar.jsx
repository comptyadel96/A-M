import React, { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const activeStyle = "pb-2 border-b-2 border-[#F4D298] "
  const activeStyle2 = "pb-2 border-b-2 border-transparent "
  const inactiveStyle = "pb-2 border-b-2 border-transparent"

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      {/* web navbar */}
      <nav className="flex items-center gap-8 mx-6">
        <NavLink
          // className="pb-2 border-transparent border-b-2"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          to="/about"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          to="/FAQ"
        >
          FAQ
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
