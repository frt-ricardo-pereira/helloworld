import React from "react"

export default function AboutSection({
  aboutTitle1,
  aboutTitle2,
  aboutDescription,
  applyButtonName,
  applyButtonTo,
  sendEmailName,
  sendEmailTo,
  aboutBallonName1,
  aboutBallonDescription1,
  aboutBallonName2,
  aboutBallonDescription2,
  aboutBallonName3,
  aboutBallonDescription3
}) {
  return (
    <section class="bg-gray-50 bg-opacity-90 shadow">
      <div class="max-w-7xl  lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col lg:flex-none mx-auto ">
        <div class="px-4 sm:px-6 sm:text-center  lg:col-span-6 lg:text-left lg:flex lg:items-center">
          <div>
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold  sm:leading-none  lg:text-5xl ">
              <span class=" md:block">
                {aboutTitle1}
                <span class="text-sunset-600 font-bold">
                  {" " + aboutTitle2}
                </span>
              </span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              {aboutDescription}
            </p>

            <div class="mt-3  inline-block mx-auto">
              <a
                href={applyButtonTo}
                target="_blank"
                rel="noreferrer"
                class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-l-full rounded-r-full text-white bg-sunset-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {applyButtonName}
              </a>
            </div>
            <div class="mt-3  inline-block mx-auto ml-3">
              <a
                href={"mailto:" + { sendEmailTo }}
                class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-l-full rounded-r-full text-white bg-sunset-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {sendEmailName}
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 flex mx-auto h-96 mt-10 ">
          <div class="-ml-36 sm:-ml-36 flex">
            <div
              style={{ borderRadius: "3rem" }}
              class=" w-40 h-40 bg-yellow-500 rounded-3xl opacity-60 mt-12 text-white flex flex-col justify-center items-center  "
            >
              <p class="text-4xl "> {aboutBallonName1}</p>
              <p class="text-2xl  ">{aboutBallonDescription1}</p>
            </div>
            <div
              style={{ backgroundColor: "#f3a592", borderRadius: "3rem" }}
              class="w-40 h-40 sm:w-56 sm:h-56  flex   rounded-3xl  absolute ml-32 sm:ml-36 opacity-80"
            >
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p class="text-4xl "> {aboutBallonName2}</p>
              <p class="text-2xl text-center ">{aboutBallonDescription2}</p>
              </div>
            </div>
            <div
              style={{ borderRadius: "3rem" }}
              class="w-44 h-44 bg-blue-300  mr-2 absolute mt-40 ml-20 opacity-80"
            >
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p class="text-4xl "> {aboutBallonName3}</p>
              <p class="text-2xl  text-center">{aboutBallonDescription3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
