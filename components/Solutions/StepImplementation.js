import { businessData, implementationData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const BusinessBenefits = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-5 mb-16 px-4 md:px-0">
      <h2 className="text-2xl font-semibold text-[#622F88] text-center">
        4-Step Implementation
      </h2>

      <div className="flex justify-center mt-5 w-full">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {implementationData.map((item, index) => {
            return (
              <li key={index}>
                <div className="flex flex-col-reverse md:flex-row items-center gap-4">
                  <div
                    className={`flex flex-col w-full md:w-[420px] ${
                      index % 2 === 0 ? "md:text-right" : "md:order-1"
                    }`}
                  >
                    <h3
                      className={`text-cms-primary font-semibold text-lg md:text-xl ${
                        index % 2 === 0
                          ? "md:text-right text-center"
                          : "md:text-left text-center"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-[#171717] text-lg md:text-base ${
                        index % 2 === 0
                          ? "md:text-right text-center"
                          : "md:text-left text-center"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <Image
                      src={item.iconUrl}
                      width={80}
                      height={80}
                      alt={item.title}
                      className="w-20 h-20 md:w-24 md:h-24"
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default BusinessBenefits
