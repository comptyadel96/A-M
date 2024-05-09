import React from "react"

function About() {
  return (
    <div className="lg:py-10 flex flex-col items-center">
      <h1 className="lg:text-7xl">About A&M: </h1>
      <div className="flex  md:flex-row flex-col lg:gap-10 w-full lg:mt-10 bg-black lg:py-[7rem] lg:px-10">
        <img
          src="/images/office.jpg"
          alt=""
          className="object-contain lg:h-[16rem] h-[10rem] rounded-md"
        />
        <div className="flex flex-col">
          <h2 className="text-[#F4D298] lg:text-4xl ">
            Driving Trade and Prosperity <br /> Across Algeria, Mauritania, and
            Beyond
          </h2>

          <p className="text-white lg:max-w-[90%] lg:mt-4 lg:text-xl leading-loose   ">
            A&M, your trusted partner in facilitating trade and fostering
            business opportunities between Algeria, Mauritania, and beyond. At
            A&M, we are dedicated to driving economic growth and prosperity by
            connecting businesses and facilitating partnerships across borders.
          </p>
          <p className="lg:max-w-[87%] bg-slate-900 mix-blend-lighten z-30 lg:mt-4 lg:text-xl leading-loose lg:self-center pl-3 border-l-2 border-l-yellow-300 ">
            Our team is committed to providing comprehensive services tailored
            to meet the unique needs of our clients. From strategic consulting
            to sourcing commercial partners and investors, we offer a range of
            solutions to help companies succeed in the Algerian, Mauritanian,
            and African markets.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:mt-10 text-center w-full">
        <h2 className=" lg:text-4xl">
          Empowering Prosperity Through Ethical Trade and Sustainable
          Development
        </h2>
        <p className="lg:mt-3 lg:max-w-[57%] lg:text-xl ">
          As advocates for fair trade and sustainable development, we prioritize
          ethical business practices and aim to promote regional economic
          cooperation. By understanding the intricacies of local markets, trade
          regulations, and economic dynamics, we deliver tailored solutions that
          empower businesses to thrive
        </p>
      </div>

      <div className="flex flex-col items-center lg:mt-10">
        <img
          src="/images/africa.png"
          alt="Africa map"
          className="object-contain lg:max-w-[20%] "
        />
        <h2 className="lg:text-4xl lg:mt-3 text-center">
          Unlocking Opportunities: Your Path to Success in African Markets
          Starts Here
        </h2>
        <p className="lg:mt-3 lg:max-w-[57%] lg:text-xl text-center">
          Whether you&apos;re looking to expand your presence, enter new
          markets, or establish lasting partnerships, A&M is here to guide you
          every step of the way. Contact us today to explore how we can assist
          you in achieving your business objectives and driving success in the
          dynamic landscape of African markets.
        </p>
        <button className="bg-[#F4D298] px-3 py-2 mt-4 text-xl rounded-md">
          Contact us now
        </button>
      </div>
    </div>
  )
}

export default About
