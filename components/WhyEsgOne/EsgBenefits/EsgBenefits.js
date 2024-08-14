import { frameworksData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const EsgBenefits = () => {
  return (
    <div className="bg-[#F8F2FC] p-6 md:p-10 flex flex-col items-center gap-6 md:gap-8 mt-[480px] lg:mt-16">
      <div className="flex justify-center w-full">
        <Image
          src="/whyEsgOne/image02.png"
          width={1200}
          height={700}
          alt="esg benefits"
          className="w-full md:w-10/12 hidden md:block"
        />
        <Image
          src="/whyEsgOne/mImage02.png"
          width={1200}
          height={700}
          alt="esg benefits"
          className="w-full md:w-10/12 block md:hidden"
        />
      </div>
      <div className="space-y-4 md:space-y-5 text-center">
        <h3 className="text-[#622F88] text-2xl md:text-3xl font-semibold">
          Frameworks We Align With
        </h3>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          {frameworksData.map((item) => {
            return (
              <li key={item.id} className="flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  height={77}
                  width={165}
                  className="h-auto w-auto"
                  alt={item.name}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default EsgBenefits
