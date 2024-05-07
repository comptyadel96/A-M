import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <div className="mt-auto bg-[#F2ECE2] md:py-3 flex flex-wrap md:gap-4 items-center justify-evenly ">
      <img
        src="/images/logo.png"
        alt=""
        className="object-contain lg:w-[10rem]  ml-3 mt-2"
      />
      <div className="flex flex-col items-center">
        <h3 className="lg:text-xl text-lg">Shortcut</h3>
        <p>Home</p>
        <p>About us</p>
        <p>Contact</p>
        <p>FAQ</p>
      </div>

      {/* reseaux sociaux */}
      <div className="flex flex-col ">
        <h3 className="lg:text-xl text-lg">Follow us</h3>
        <div className="flex items-center gap-3 md:mt-3">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <FaYoutube className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col">
        <h3>A&m , all rights reserved ©</h3>
        <p className="text-sm">{new Date().getFullYear()} </p>
      </div>
      
    </div>
  )
}

export default Footer
