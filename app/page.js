"use client"

import React, { useRef, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import GlobalImpact from "@/components/Esg/GlobalImpact"
import Outcome from "@/components/Esg/Outcome"
import DifferentSectors from "@/components/Esg/DifferentSectors"
import Vision from "@/components/Esg/Vision"
import OurTeam from "@/components/Esg/OurTeam"
import Footer from "@/components/Esg/Footer"
import Contact from "@/components/Esg/Contact"
import Banner from "@/components/Esg/Banner"
import Heading from "@/components/Heading/Heading"

export default function Home() {
  // const section1Ref = useRef(null)
  // const scrollToSection1 = () => {
  //   section1Ref.current.scrollIntoView({ behavior: "smooth" })
  // }

  const bannerImageUrl = "/banner/banner01.png"
  const mobileBannerUrl = "/banner/mobileBanner01.jpg"
  const bannerTitle = "Sustainable Tomorrow"
  const bannerDesc = "Catalysing Net-Positive Value Chains for a"
  const desc =
    "In a world where the impacts of our actions resonate far beyond immediate boundaries, the need for comprehensive sustainability practices becomes crucial. At ESG-One, we understand that it’s no longer sufficient for organisations to focus solely on direct controls within their operations. True sustainability requires a holistic approach, extending responsible business practices throughout the entire value chain by implementing changes in policy and practice that focus on people, the planet, and sustainable outcomes."

  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    })
  })

  return (
    <>
      {/* <Header onClick={scrollToSection1} /> */}
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <Heading desc={desc} />

      <GlobalImpact />
      <Outcome />
      <DifferentSectors />
      <Vision />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  )
}
