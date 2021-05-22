import React from "react"
import { useForm } from "react-hook-form"
import Fade from "react-reveal/Fade"
import Rotate from "react-reveal/Rotate"
import FuseImage from "../../static/img/codingForDraw.svg"

import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe('pk_live_51HZNYxLZlsLhHCWp3J6tRrGyC1ISyGG7jJTTfRh4yWwkafLv35dcyrs8MCW3GxljzRnWCHpfP51Hnt5hqQy2zXnp00tQSSVEqV')


const DonationTemplate = ({
  donationTitle1,
  donationTitle2,
  donatioSubTitle,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => onClick(data)

  const onClick = (data) => {
    data.donation = data.donation  * 100
    fetch("/.netlify/functions/donateCreateSession", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(async response => {
        const { id } = await response.json()
        const stripe = await stripePromise
        const { error } = await stripe.redirectToCheckout({ sessionId: id })
        alert(error.message)
      })
      .catch(err => alert(err.message))
  }
  return (
    <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8  ">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {donationTitle1} <span class="text-sunset-600">{donationTitle2}</span>
      </h2>
      <div class="space-y-12 mt-4 p-4">
        <div class=" lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col lg:flex-none mx-auto ">


          <div class="lg:col-span-6 flex mx-auto  mt-10 ">
            <Rotate bottom left>
              <div class="flex justify-center mt-2">
                <img class="  w-auto  " src={FuseImage} alt=""></img>
              </div>
            </Rotate>
          </div>

          <div class="px-4 sm:px-6 sm:text-center  lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <div class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <p class="">{donatioSubTitle}</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="sm:flex mt-4  ">
                  <div>
                    <div className="relative rounded-md shadow-sm  iems-center border-2  sm:w-64 ">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">€</span>
                      </div>
                      <div class="flex flex-col">
                        <input
                          type="number"
                          {...register("donation", { min: 1 })}
                          aria-invalid={errors.donation ? "true" : "false"}
                          className="focus:outline-none  focus:ring-4 ring-blue-300 ring-opacity-50 block pl-7 pr-2 sm:text-sm border-gray-300 rounded-md  w-full  h-11 "
                          placeholder="0.00"
                          aria-describedby="price-currency"
                        />
                      </div>
                    </div>
                    {errors.donation && errors.donation.type === "min" && (
                      <span role="alert" class="text-red-500">Please enter a valid number</span>
                    )}
                  </div>
                  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0 h-11 ">
                    <button
                      type="submit"
                      class="w-full flex items-center justify-center px-5 py-3   border border-transparent text-base font-medium rounded-md text-white bg-sunset-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Donate
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DonationTemplate
