import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      {/* web navbar */}
      <nav className="flex items-center gap-8 mx-6">
        <Link>Home</Link>
        <Link to="about" >About us</Link>
        <Link>Contact</Link>
        <Link>FAQ</Link>
      </nav>
    </>
  )
}

export default Navbar
