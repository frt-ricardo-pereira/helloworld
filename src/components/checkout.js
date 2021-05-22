import React from "react"

import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe('pk_live_51HZNYxLZlsLhHCWp3J6tRrGyC1ISyGG7jJTTfRh4yWwkafLv35dcyrs8MCW3GxljzRnWCHpfP51Hnt5hqQy2zXnp00tQSSVEqV')

const Checkout = () => {

  const onClick = () => {


    fetch("/.netlify/functions/orderCreate", {
      method: "POST",
      
    })
      .then(async response => {
        const { id } = await response.json()
        const stripe = await stripePromise
        const { error } = await stripe.redirectToCheckout({ sessionId: id })
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        alert(error.message)
      })
      .catch(err => alert(err.message))
  }

  return <button onClick={onClick}>Checkout for ${22 / 100}</button>
}

export default Checkout