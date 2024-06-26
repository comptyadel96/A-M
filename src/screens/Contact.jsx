import React from "react"
import Lottie from "lottie-react"
import ContactAnim from "../assets/animations/contact.json"
import { FaMailBulk, FaMap, FaPhone, FaWhatsapp } from "react-icons/fa"

function Contact() {
  return (
    <div className="lg:py-10 flex flex-col items-center">
      <h1 className="lg:text-9xl lg:mb-16">Contact us</h1>

      <div className="flex w-full items-center justify-center">
        <div className="lg:w-[30rem] ">
          <Lottie loop autoPlay animationData={ContactAnim} />
        </div>

        <div className="flex flex-col self-start lg:gap-7 gap-4">
          <h2 className="lg:text-4xl lg:mb-5">Get in touch with us </h2>
          <div className="flex items-center gap-2">
            <FaPhone size={30} />
            <p className="lg:text-xl">+222 32226032 / +213 661504648 </p>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={30} />
            <p className="lg:text-xl"> +222 22246969 </p>
          </div>

          {/* adresse */}
          <div className="flex items-center gap-2">
            <FaMap size={30} />
            <p className="lg:text-xl">Tevragh Zeina, Nouakchott, Mauritania </p>
          </div>

          <div className="flex items-center gap-2">
            <FaMailBulk size={30} />
            <p className="lg:text-xl"> algeromauritanie@gmail.com</p>
          </div>
          <button className="lg:px-3 py-2 rounded-md bg-[#F4D298]">
            Call us
          </button>
          <button className="lg:px-3 py-2 rounded-md bg-black text-[#F4D298]  ">
            Email us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
