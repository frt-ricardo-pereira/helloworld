import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import Checkout from "../components/checkout"
const DonationTemplate = ({
  donationTitle1,
  donationTitle2,
  donatioSubTitle,
}) => {
    getStripe()
  return (
    <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8  ">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {donationTitle1} <span class="text-sunset-600">{donationTitle2}</span>
      </h2>
      <div class="space-y-12 shadow-lg border-2 border-gray-100 mt-4 p-4">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <p class="text-xl text-gray-500">{donatioSubTitle}</p>
        </div>

      </div>
      <Checkout></Checkout>
    </div>
  )
}
export default DonationTemplate

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("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")
  }
  return stripePromise
}