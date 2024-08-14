import Banner from "@/components/Banner/Banner"
import Contact from "@/components/Esg/Contact"
import Footer from "@/components/Esg/Footer"
import Heading from "@/components/Heading/Heading"
import BusinessBenefits from "@/components/Solutions/BusinessBenefits"
import Solutions from "@/components/Solutions/Solutions"
import StepImplementation from "@/components/Solutions/StepImplementation"
import Image from "next/image"

const page = () => {
  const bannerImageUrl = "/banner/banner03.png"
  const mobileBannerUrl = "/banner/mobileBanner03.jpg"
  const bannerTitle = "Solutions"
  const bannerDesc =
    "Our comprehensive suite of services and solutions is designed to address the complexities and opportunities within Environmental, Social, and Governance (ESG) frameworks. By focusing on the human aspect of business practices, we ensure that our solutions not only meet global standards but also foster a positive and inclusive work environment."
  const title = ""
  const desc =
    "From risk and opportunity assessments that highlight potential paths to sustainability, to double materiality analyses that evaluate impacts on and from your business, our approach supports meaningful integration of ESG principles. We will help you decarbonise operations which are vital for community health, while our capacity-building programs enhance both personal and organisational development. Moreover, we provide access to essential tools and resources that empower your business to manage and improve ESG performance effectively."

  return (
    <>
      {/* <Header /> */}
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <Heading title={title} desc={desc} />

      <div className="flex justify-center mb-16">
        <div className="flex justify-center">
          <Image
            src="/solutions/image01.png"
            width={680}
            height={674}
            alt="solutions"
            className="w-4/5"
          />
        </div>
      </div>

      <Solutions />
      <BusinessBenefits />
      <StepImplementation />
      <Contact />
      <Footer />
    </>
  )
}

export default page
