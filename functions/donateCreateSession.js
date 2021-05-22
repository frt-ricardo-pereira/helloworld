const stripe = require("stripe")('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')
const redirectUrl = "http://localhost:8888/"

module.exports.handler = async (event, context, callback) => {
 
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: redirectUrl + "?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: redirectUrl,
    submit_type:"donate",
    payment_method_types:['card'],
    line_items:[{
      'amount': JSON.parse(event.body).donation,
      'name': 'Donation',
      'currency': 'EUR',
      'quantity': 1
    }],
    metadata:{
      'cause': 'donation'
    }
  })

  const response = {
    statusCode: 200,
    body: JSON.stringify(session),
  }

  callback(null, response)
}
