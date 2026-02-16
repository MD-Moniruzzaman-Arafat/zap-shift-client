import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import Loading from '../../Loading/Loading';

export default function CheckOutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState();
  const { id } = useParams();
  const api = useAxios();
  const navigate = useNavigate();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos', id],
    queryFn: async () => await api.get(`/parcel/${id}`),
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data.data.data);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      setPaymentError('');
      console.log('[PaymentMethod]', paymentMethod);
    }

    const res = await api.post('/create-checkout-session', {
      amount: data.data.data.cost * 100,
    });

    const result = await stripe.confirmCardPayment(res.data.clientSecret, {
      payment_method: {
        card: card,
      },
    });

    if (result.error) {
      console.log(error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('PaymentIntent:', result.paymentIntent);
        console.log(result.paymentIntent.payment_method_types[0]);
        Swal.fire({
          title: 'Payment Success',
          icon: 'success',
          confirmButtonText: `
             <i class="fa fa-thumbs-up"></i> Ok !
            `,
          draggable: true,
        });
        const paymentData = {
          parcelId: data.data.data._id,
          email: data.data.data.createdBy,
          amount: data.data.data.cost,
          transactionId: result.paymentIntent.id,
          payment_Method: result.paymentIntent.payment_method_types[0],
        };
        console.log(paymentData);

        await api.post('/payment', paymentData);
        navigate('/dash-board'); // যেই route এ নিতে চাও
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-10 m-10 w-xl mx-auto"
      >
        <CardElement className="bg-blue-100 p-10 rounded-xl" />
        <p className="text-red-500">
          <small>{paymentError}</small>
        </p>
        <button
          type="submit"
          className="bg-black text-white btn w-full my-10"
          disabled={!stripe}
        >
          Pay ${data.data.data.cost} for parcel pickup
        </button>
      </form>
    </>
  );
}
