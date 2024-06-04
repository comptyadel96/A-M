import React from "react"
import Office from "/images/office.jpg"
function About() {
  return (
    <div className="lg:py-10 flex flex-col items-center">
    
      <section
        style={{
          backgroundImage: "url(" + Office + ")",
          minHeight: "78vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex  md:flex-row flex-col justify-center relative lg:gap-10 w-full lg:mt-10 bg-black lg:py-[7rem] lg:px-10"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="flex flex-col z-20">
          <h2 className="text-[#F4D298] lg:text-5xl ">
            Driving Trade and Prosperity <br /> Across Algeria, Mauritania, and
            Beyond
          </h2>

          <p className="text-white lg:max-w-[90%] lg:mt-4 lg:text-2xl leadingT   ">
            A&M, your trusted partner in facilitating trade and fostering
            business opportunities between Algeria, Mauritania, and beyond. At
            A&M, we are dedicated to driving economic growth and prosperity by
            connecting businesses and facilitating partnerships across borders.
          </p>
          <div className="relative bg-red">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F4D298"
                fillOpacity="1"
                d="M0,128L34.3,154.7C68.6,181,137,235,206,250.7C274.3,267,343,245,411,224C480,203,549,181,617,144C685.7,107,754,53,823,58.7C891.4,64,960,128,1029,154.7C1097.1,181,1166,171,1234,160C1302.9,149,1371,139,1406,133.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg> */}
            {/* <p className="lg:max-w-[87%] absolute top-0 left-0  text-blend z-30 lg:mt-4 lg:text-2xl leadingT lg:self-center pl-3 border-l-2 border-l-yellow-300 ">
              Our team is committed to providing comprehensive services tailored
              to meet the unique needs of our clients. From strategic consulting
              to sourcing commercial partners and investors, we offer a range of
              solutions to help companies succeed in the Algerian, Mauritanian,
              and African markets.
            </p> */}
            <p className="lg:max-w-[87%] absolute top-0 left-0  text-white z-30 lg:mt-4 lg:text-2xl leadingT lg:self-center pl-3 border-l-2 border-l-yellow-300 ">
              Our team is committed to providing comprehensive services tailored
              to meet the unique needs of our clients. From strategic consulting
              to sourcing commercial partners and investors, we offer a range of
              solutions to help companies succeed in the Algerian, Mauritanian,
              and African markets.
            </p>
          </div>
        </div>
      </section>

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
