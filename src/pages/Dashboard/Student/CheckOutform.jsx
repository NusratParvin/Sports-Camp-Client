import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';
import './CheckOutform.css'
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const CheckOutform = ({ id }) => {
    const navigate = useNavigate()
    const [cart] = useCart()
    const selectedClass = cart.filter(item => item._id === id)
    // const price = parseInt(selectedClass[0].price)
    const price = selectedClass.length > 0 ? parseInt(selectedClass[0].price) : 0;

    const stripe = useStripe()
    const [Axios] = useAxios()
    const elements = useElements()
    const { user } = useAuth()
    console.log(price);
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price <= 0) {
            return
        }
        Axios.post('/create-payment-intent', { price })
            .then(response => {
                console.log(response.data.clientSecret, 'res confirm');
                setClientSecret(response.data.clientSecret)
            })
    }, [price, Axios])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        console.log(card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError, 'confirmError');

        }
        console.log('payment intent', paymentIntent)




        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)
            console.log(transactionId);
            const payment = {
                email: user?.email,
                transactionId: transactionId,
                price,
                date: new Date(),
                cartId: id,
                classId: selectedClass[0].classId,
                className: selectedClass[0].name
            }
            console.log(payment, 'payment');
            Axios.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult) {
                        toast.success(`$${payment.price} has been credited from your account!`)
                        navigate('/dashboard/selected')
                    }
                })
        }
        else {
            console.log('not hit');
        } setProcessing(false)


        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('paymentmethod', paymentMethod);
        }

    }

    return (
        <>
            <div className=''>
                <div className='mt-8 mb-6 text-center text-2xl font-semibold text-black/70'>
                    <p>Payment</p>
                </div>
                <form className='w-2/3 mt-22' onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aaa7d8',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <div className='mt-12' >
                        <Button color='indigo' className='button align-middle mt-22 mx-auto' type="submit" disabled={!stripe || !clientSecret || processing}>
                            Pay now
                        </Button>
                    </div>

                </form>

                <div className=' text-center'>
                    {
                        cardError && <p className=' text-xl text-red-600'>{cardError}</p>
                    }
                    {
                        transactionId && <p className='text-xl font-semibold'>
                            Payment Successful! <br />
                            Transaction id : {transactionId}</p>
                    }
                </div>

            </div>
        </>

    );
};

export default CheckOutform;