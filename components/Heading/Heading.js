import React from "react"

const Heading = ({ title, desc }) => {
  return (
    <div className="flex justify-center my-12 md:my-16 px-4 md:px-0">
      <div
        className="w-full md:w-3/4 space-y-2 md:space-y-3"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl lg:text-3xl text-cms-primary font-semibold text-center">
          {title}
        </h2>
        <p className="text-base md:text-lg lg:text-lg text-[#171717] text-center">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Heading
