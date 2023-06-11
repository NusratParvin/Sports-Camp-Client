import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckOutform from "./CheckOutform";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


const Payment = () => {
    const { id } = useParams();
    console.log(id);
    // const singleClass = JSON.parse(decodeURIComponent(encodedObj));
    return (
        <div className=" w-3/4">
            
            <Elements stripe={stripePromise}>
                <CheckOutform id={id}></CheckOutform>
            </Elements>
        </div>
    );
};

export default Payment;