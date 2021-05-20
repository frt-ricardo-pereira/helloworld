import React from "react"

export default function IntroduceSection ({
  newsletterTitle1,
  newsletterTitle2,
  newsletterSubscribeName

}) {
  return (
    <section class=" ">
        <div class="flex justify-center bg-gray-50  border-t-2  bg-opacity-70">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p class="inline text-3xl font-extrabold tracking-tight sm:block sm:text-4xl">
              {newsletterTitle1} <span class="text-sunset-600"> {newsletterTitle2}</span>
            </p>
            <div class="mt-8 sm:flex">
              <label htmlFor="emailAddress" class="sr-only">
                Email address
              </label>
              <input
                id="emailAddress"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs  border-2 border-gray-300 rounded-md"
                placeholder="Enter your email"
              ></input>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sunset-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {newsletterSubscribeName}
                </button>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}
