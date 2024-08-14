import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Outcome({ onClick }) {
  return (
    <>
      {/* Desktop View */}
      <div
        className="lg:flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 hidden relative"
        data-aos="zoom-in"
      >
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/outcome-desktop.jpg"
            alt="Outcome Desktop"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-6">
          <Link href="/contact-us">
            <button
              className="bg-[#7F3F97] p-2 px-4 rounded-lg text-white"
              onClick={onClick}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="h-[1150px] flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 lg:hidden relative"
        style={{
          backgroundImage:
            "url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/outcome-mobile.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        data-aos="zoom-in"
      >
        <div className="absolute bottom-4">
          <Link href="/contact-us">
            <button
              className="bg-[#7F3F97] p-2 px-4 rounded-lg text-white"
              onClick={onClick}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
