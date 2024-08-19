import Image from "next/image"

const Navigating = () => {
  return (
    <div className="relative flex justify-center mb-12 md:mb-16 px-4 md:px-0">
      <div>
        <Image
          src="/navigating/map.png"
          width={740}
          height={830}
          alt="India map"
          className="w-full md:w-auto"
        />
      </div>
      <div className="absolute top-1/3 flex flex-col items-center gap-4 md:gap-3 px-4 md:px-0">
        <h3 className="text-xl md:text-2xl text-[#239F79] font-semibold text-center">
          Navigating the ESG Landscape in India
        </h3>
        <p className="text-center text-base md:text-lg text-[#171717] w-full md:w-3/5">
          The regulatory environment is evolving, with new sustainability
          regulations impacting the top 250 companies by market capitalisation
          in India and EU exporters. This shift places significant pressure on
          value chain players, particularly MSMEs, to align with these
          requirements. ESG-One equips your business to:
        </p>

        <div className="flex flex-col md:flex-row items-center justify-around mt-28 lg:mt-7 w-full md:w-10/12 gap-4 md:gap-0">
          <div
            className="border-8 border-[#D0EAE2] rounded-[36px] w-full md:w-auto"
            data-aos="fade-right"
          >
            <div className="bg-[#239F79] rounded-3xl m-2 py-7 px-5 md:px-7 flex flex-col items-center gap-2 text-white h-auto md:h-[180px]">
              <h4 className="text-center text-lg md:text-2xl font-semibold">
                Align with Buyer Requirements
              </h4>
              <p className="text-center text-sm md:text-lg">
                Ensure growth and competitiveness through ethical sourcing,{" "}
                <br className="hidden md:block" /> transparency, accountability,
                and responsible practices
              </p>
            </div>
          </div>

          <div
            className="border-8 border-[#D0EAE2] rounded-[36px] w-full md:w-auto"
            data-aos="fade-left"
          >
            <div className="bg-[#239F79] rounded-3xl m-2 py-7 px-5 md:px-7 flex flex-col items-center gap-2 text-white h-auto md:h-[180px]">
              <h4 className="text-center text-lg md:text-2xl font-semibold">
                Comply with Regulations
              </h4>
              <p className="text-center text-sm md:text-lg">
                Navigate voluntary sustainability reporting for MSMEs, such{" "}
                <br className="hidden md:block" /> as SEBI’s BRSR Lite, reducing
                compliance costs and efforts <br className="hidden md:block" />{" "}
                while advancing sustainability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigating
