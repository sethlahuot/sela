import React, { useEffect, useRef, useState } from 'react';

const PayPal = ({ total }) => {
    const paypalRef = useRef(null);
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        if (window.paypal) {
            setSdkReady(true);
        } else {
            const script = document.createElement('script');
            script.src = 'https://sandbox.paypal.com/sdk/js?client-id=AdAFOX0e1v_C2uEkFOtrooBbBvfoOr71TPgb0vA1E03j2_RRxRyYxcxRSpeVRktz8-xGzYT31xx--jgP';
            script.async = true;
            script.onload = () => setSdkReady(true);
            document.body.appendChild(script);
        }
    }, []);

    useEffect(() => {
        if (sdkReady && paypalRef.current) {
            paypalRef.current.innerHTML = '';
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total.toFixed(2),
                                },
                            },
                        ],
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert(`Transaction completed by ${details.payer.name.given_name}`);
                        console.log('Transaction details:', details);
                    });
                },
                onError: (err) => {
                    console.error('PayPal error:', err);
                },
            }).render(paypalRef.current);
        }
    }, [sdkReady, total]);

    if (!sdkReady) {
        return <div>Loading PayPal...</div>;
    }

    return <div ref={paypalRef}></div>;
};

export default PayPal;