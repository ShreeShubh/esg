// "use client"

// import { useEffect, useState } from "react"

// const Banner = ({
//   bannerImageUrl,
//   mobileBannerUrl,
//   bannerTitle,
//   bannerDesc,
// }) => {
//   const [backgroundImage, setBackgroundImage] = useState(mobileBannerUrl)

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 640) {
//         setBackgroundImage(bannerImageUrl)
//       } else {
//         setBackgroundImage(mobileBannerUrl)
//       }
//     }

//     // Set initial image based on the current window width
//     handleResize()

//     // Add event listener to handle window resize
//     window.addEventListener("resize", handleResize)

//     // Cleanup event listener on component unmount
//     return () => window.removeEventListener("resize", handleResize)
//   }, [bannerImageUrl, mobileBannerUrl])

//   return (
//     <div
//       className="bg-cover bg-center h-[575px] md:h-[450px] lg:h-[594px] flex justify-center sm:justify-end items-start sm:items-center p-4 sm:p-8 md:p-12 lg:p-16 mt-20 sm:mt-12 md:mt-16"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       <div className="flex flex-col gap-1 sm:gap-3 md:gap-4 lg:gap-5 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[516px] text-center sm:text-left">
//         <p className="text-base sm:text-3xl md:text-4xl lg:text-5xl text-[#043929]">
//           {bannerDesc}
//         </p>
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#239F79] font-semibold">
//           {bannerTitle}
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default Banner

import React from "react"

export default function Banner() {
  return (
    <div className="bg-[#F9FDFC] mt-16">
      <div className="flex lg:flex-row flex-col  items-center">
        <div className="lg:w-[60%] py-10 lg:py-0">
          <div className="flex flex-col justify-end items-end">
            <h1
              className="text-[#043929] lg:text-5xl font-normal text-3xl leading-8 lg:pt-10 pt-10 w-[90%]"
              data-aos="zoom-in"
            >
              Catalysing Net-Positive
              <br /> Value Chains for a <br />
              <span className="text-[#05AC8D] font-black lg:text-5xl text-3xl py-4">
                Sustainable Tomorrow
              </span>
            </h1>
            <div className="w-[90%] mt-14 hidden lg:block bottom-0">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner-arrow.svg"
                className="w-[30%] bottom-0"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[35%]">
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/BGBanner.png"
            className="h-[80%] w-[100%]"
          />
        </div>
      </div>

      {/* <div
        className="flex lg:flex-row flex-col lg:justify-center lg:items-center justify-start text-center lg:text-start lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/Group+51795.svg')] lg:bg-cover bg-center mb-16 bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/mobile-banner.png')] bg-contain bg-no-repeat bg-[#ebefee] mt-0 p-4"
        data-aos="fade-up"
      >
        <div className="w-full lg:order-2 order-2 "></div>
        <div className="w-11/12 lg:order-1 order-1 py-0 px-12 flex flex-col justify-between ">
          <div className="flex flex-col justify-end items-end ">
            <h1
              className="text-[#043929] lg:text-5xl font-normal text-3xl leading-8 lg:pt-40 pt-10"
              data-aos="zoom-in"
            >
              Catalysing Net-Positive
              <br /> Value Chains for a <br />
              <span className="text-[#05AC8D] font-black lg:text-5xl text-3xl py-4">
                Sustainable Tomorrow
              </span>
            </h1>
          </div>
          <div className="flex-col justify-end items-start ml-40 hidden lg:flex w-11/12">
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner-arrow.svg" />
          </div>
        </div>
      </div> */}
    </div>
  )
}
