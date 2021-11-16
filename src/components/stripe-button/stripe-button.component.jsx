import React from "react";

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishable = 'pk_test_51IShjUCV6iTQCuPmlKmFCgZR9Dc6W2rqQ7eN6y4LFZx9lRAzsGsD5Y8TnCoYw9aOsalqFFImQBVfpZtQPhxPdNx000q2XLDO2G';

    const onToken = token => {
        console.log(token);

        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishable}
        />
    );
};

export default StripeCheckoutButton;