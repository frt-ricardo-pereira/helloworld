import React from "react"
import Fade from "react-reveal/Fade"
import Rotate from "react-reveal/Rotate"
import FuseImage from "../../../static/img/codingForDraw.svg"
export default function IntroduceSection({
  introTitle1,
  introTitle2,
  introDescription,
  introImage,
}) {
  return (
    <section class="bg-gray-50 bg-opacity-30 py-12 px-12 ">
      <div class="max-w-7xl  lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col lg:flex-none mx-auto ">
        <div class="px-4 sm:px-6 sm:text-center  lg:col-span-6 lg:text-left lg:flex lg:items-center">
          <div>
            <div class="mt-4 text-2xl tracking-tight font-extrabold  sm:leading-none sm:text-3xl lg:text-4xl  ">
              <Fade left>
                <p>
                  <span class=" md:block">
                    {introTitle1}
                    <span class="text-sunset-600 font-bold">
                      {" " + introTitle2}
                    </span>
                  </span>
                </p>
              </Fade>
            </div>
            <div class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              <p class="">{introDescription}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 flex mx-auto  mt-10 ">
          <Rotate bottom left>
            <div class="flex justify-center mt-2">
              <img style={{width:"auto"}, {height:"300px"}} class="  w-auto  " src={FuseImage} alt=""></img>
            </div>
          </Rotate>
        </div>
      </div>
    </section>
  )
}
