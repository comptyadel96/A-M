import React from "react"

function Home() {
  return (
    <div className="flex flex-col items-center lg:pt-20">
      <div className="flex w-full lg:px-6 gap-8 relative">
        <div className="self-start ">
          <img
            src="images/monument1.jpg"
            alt="monument du martyr algérie"
            className="object-contain w-full min-w-[16rem]"
          />
          <p className="text-center bg-stone-300 mt-3 text-xs py-1">
            Triomphe du martyr, Alger
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-4xl lg:max-w-[75%]">
            Unlocking Opportunities: Your Gateway to Prosperity in Algeria,
            Mauritania, and Africa
          </h1>
          <p className="lg:mt-8 lg:text-xl">
            Welcome to our business office specializing in commercial relations
            between Algeria and Mauritania, as well as in fostering business
            opportunities across Africa. We are a dedicated team committed to
            facilitating trade, promoting investments, and supporting economic
            growth in the region.
          </p>

          <p className="lg:mt-3 lg:text-xl">
            Our services include strategic consulting for companies looking to
            enter the Algerian, Mauritanian, and African markets, sourcing
            commercial partners and investors, as well as assisting in building
            strong and lasting partnerships. We focus on gaining a thorough
            understanding of local markets, trade regulations, and economic
            dynamics to provide tailored solutions to our client&apos;s specific
            needs.
          </p>
        </div>
        {/* nouakchott image */}
        <div className="self-end lg:h-[16rem] lg:mt-[10rem]">
          <img
            src="/images/nouakchott.png"
            alt="nouakchott ,mauritanie"
            className=" object-contain  "
          />
          <p className="text-center bg-stone-300 mt-3 text-xs py-1">
            Nouakchott, Mauritanie
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-[50%] flex flex-col items-center">
          <h2 className=" lg:text-2xl">
            &quot;It always seems impossible until it&apos;s done&quot;
          </h2>
          <p>Nelson Mandela</p>
        </div>
      </div>

      {/* bridge between algeria , mauritania and africa */}
      <section className="lg:my-36 flex flex-col items-center lg:p-10 pattern ">
        <h2 className="lg:text-4xl">
          Bridging Opportunities: Your Trusted Partner for Sustainable Growth in
          African Markets
        </h2>
        <div className="flex items-center lg:mt-12 gap-10 justify-center">
          <img
            src="/images/team.jpg"
            alt="people putting hands over other "
            className="object-contain lg:w-[35%] "
          />
          <p className="lg:max-w-[58%] lg:text-xl pl-2 border-l-2 border-l-black ">
            As a bridge between Algeria, Mauritania, and Africa, we are
            committed to promoting fair trade, sustainable development, and
            regional economic cooperation. Whether you are a company seeking to
            export, import, invest, or establish partnerships, our business
            office is your trusted partner for success in African markets.
          </p>
        </div>
        <h3 className="self-end lg:text-2xl lg:mt-6">
          &quot;Cooperation is the thorough conviction that nobody can get there
          unless everybody gets there.&quot;
        </h3>
        <p className="text-center self-end mt-1">Virginia Burden</p>
      </section>

      {/* contact us */}
      <section className="lg:my-36 flex flex-col items-center lg:p-10 bg-gray-100">
        <h3 className="lg:text-4xl">
          Empower Your Business Journey: Connect with Us for Success in Africa
        </h3>
        <p className="mt-6 text-xl">
          Contact us today to discover how we can assist you in achieving your
          business objectives in Algeria, Mauritania, and beyond, across Africa
        </p>
        <button className="bg-black py-2 lg:px-4 mt-4 text-white rounded-md lg:text-xl">
          Connect with us now
        </button>
      </section>
    </div>
  )
}
export default Home
