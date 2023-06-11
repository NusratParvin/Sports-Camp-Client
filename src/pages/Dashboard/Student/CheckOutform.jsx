import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';

const CheckOutform = ({id}) => {
    const [cart] = useCart()
    const selectedClass = cart.filter(item=>item._id===id)
 const price = parseInt(selectedClass[0].price)
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
        if(price<=0){
            return
        }
        Axios.post('/create-payment-intent', { price })
            .then(response => {
                console.log(response.data.clientSecret,'res confirm');
                setClientSecret(response.data.clientSecret)
            })
    }, [price,Axios])

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
            console.log(confirmError,'confirmError');

        }
        console.log('payment intent', paymentIntent)

        


        if(paymentIntent.status === "succeeded"){
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)
console.log(transactionId);
            const payment = {
                email:user?.email, 
                transactionId: transactionId,
                price,
                date: new Date(),
                cartId: id,
                classId: selectedClass[0].classId,
                className:selectedClass[0].name
            }
            console.log(payment,'payment');
            Axios.post('/payments',payment)
            .then(res=>{
                console.log(res.data);
                if (res.data.result.insertedId) {
                    toast.success('payment info saved')
                }
            })
        }
        else{
            console.log('not hit');
        }setProcessing(false)


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
        <div>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=' mt-12 btn btn-outline btn-primary btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay now
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-600'>Transacton Xompleted with {transactionId}</p>
            }
        </div>
    );
};

export default CheckOutform;