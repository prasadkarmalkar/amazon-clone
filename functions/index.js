const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const app = express();
const stripe = require("stripe")("sk_test_51HYT9iE6s9tXjZK5nTSHdi59wvnUlWfzIQMsiVbj5IXW9go46sTXCQGbm5QGoIKEfB0ApxMNx1HB8xyMl58kJF3I00HGLapzif");

// - API Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });
  console.log(paymentIntent.client_secret)
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

});

// - Listen command
exports.api = functions.https.onRequest(app);
