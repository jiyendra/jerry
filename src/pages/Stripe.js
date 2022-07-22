import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Stripe = () => {
    const [product] = React.useState({
        name: "Tesla Roadster",
        price: 10.67,
        description: "Cool car"
    });

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "http://localhost:8080/checkout",
            { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            //toast("Success! Check email for details", { type: "success" });
            console.log("Success")
        } else {
           // toast("Something went wrong", { type: "error" });
           console.log('error')
        }
    }

    return (
        <>
            <StripeCheckout
                stripeKey="pk_test_51HNtH9Fg2WDBz4tGuPhAn9y0SZeEkvLhVONm8Lq4ua3BZCqXRete3PnJeUo3cKil1c0nT1e9TWmolEgP8Mi5muaT00GymXXrde"
                token={handleToken}
                amount={product.price * 100}
                name="Tesla Roadster"
                billingAddress
                shippingAddress
            />
        </>
    )
}
export default Stripe