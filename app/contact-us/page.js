import Banner from "@/components/Banner/Banner"
import Contact from "@/components/ContactUs/Contact"
import ContactForm from "@/components/ContactUs/ContactForm"
import Footer from "@/components/Esg/Footer"
import Heading from "@/components/Heading/Heading"
import React from "react"

const page = () => {
  const bannerImageUrl = "/banner/banner05.png"
  const mobileBannerUrl = "/banner/mobileBanner05.jpg"
  const bannerTitle = "Contact Us"
  const bannerDesc = ""
  const title = "Let’s Start a Conversation"
  return (
    <>
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />
      <Heading title={title} />
      <div className="flex flex-col md:flex-row justify-between p-5 md:p-10">
        <div className="space-y-3 w-full md:w-[425px] mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl text-[#239F79] font-semibold">
            Ask how we can help you:
          </h2>
          <p className="text-sm md:text-base text-[#1C1C1C]">
            We value your feedback and questions. Contact us with any questions
            or comments, and we will ensure a prompt and helpful response.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page
