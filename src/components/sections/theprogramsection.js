import React from "react"
import Fade from "react-reveal/Fade"
export default function TheProgramSection({
  theProgramTitle,
  theProgramDescription,
  theProgramImage,
}) {
  return (
    <section class=" mx-auto max-w-7xl w-full text-center mt-4  ">
      <div class="text-4xl   tracking-tight font-extrabold text-gray-900 sm:text-5xl text-center">
        <Fade left>
          <p>
            <span class="block xl:inline text-center">{theProgramTitle}</span>
          </p>
        </Fade>
      </div>

      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        {theProgramDescription}
      </p>

      <div class="flex justify-center mt-10 px-10">
        <img class=" object-cover w-auto " src={theProgramImage} alt=""></img>
      </div>
    </section>
  )
}
