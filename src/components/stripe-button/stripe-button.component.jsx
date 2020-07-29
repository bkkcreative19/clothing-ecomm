import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishibaleKey = 'pk_test_51HAGxwDWiAPvHlT3VjTvIpIoQ8LZ03SmrDhNPs9Cx5mLmfXEIZtLHw2Fhy7HFLNl6uI1BOYlgoDMvz8mVzPaxF4v00IQGCbatG'

    const onToken = token => {
        alert('Payment Successful')
    }

    return(
        <StripeCheckout label='Pay Now'
        name='Clothing Store'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishibaleKey}
        />
    )

}

export default StripeCheckoutButton;