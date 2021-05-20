import React from "react"

export default function ColabSection({
  colabTitle,

}) {
  return (
    <section class="  ">
      <p class="text-center  text-lg text-gray-600 ">{colabTitle}</p>

      <div class="  mt-2 opacity-70 bg-gray-50 shadow">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              ></img>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              ></img>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              ></img>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              ></img>
            </div>
            <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
