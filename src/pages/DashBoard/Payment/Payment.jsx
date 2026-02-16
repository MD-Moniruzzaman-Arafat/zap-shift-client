import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../../../components/DashBoard/CheckOutForm/CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

export default function Payment() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </>
  );
}
