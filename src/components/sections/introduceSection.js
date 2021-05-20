import React from "react"

export default function IntroduceSection ({
  introTitle1,
  introTitle2,
  introDescription,
  introImage,
}) {
  return (
    <section class="lg:relative py-24 max-w-7xl mx-auto  ">
      <div class="mx-auto max-w-7xl w-full text-center ">
        <div class="px-4  sm:px-8 ">
          <div class="">
            <h1 class="text-4xl   tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              <span class="block xl:inline text-center">
                {introTitle1 + " "}
                <span class="text-sunset-500">{introTitle2} </span>
              </span>
            </h1>

            <p class="mt-3  text-lg text-gray-500 sm:text-xl md:mt-5 text-left">
              {introDescription}
            </p>
          </div>

          <div class="flex justify-center mt-2">
            <img class=" object-cover   " src={introImage} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  )
}
