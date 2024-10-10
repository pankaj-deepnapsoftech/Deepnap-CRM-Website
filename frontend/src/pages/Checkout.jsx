import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const { name, email, phone, employeeCount } = useSelector(
    (state) => state.auth
  );
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [razorpayKey, setRazorpayKey] = useState();

  const getRazorpayKey = async () => {
    try {
      const url = process.env.REACT_APP_BACKEND_URL + "razorpay/key";
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${cookies?.access_token}`,
        },
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      setRazorpayKey(data.razorpay_key_id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const createSubscriptionHandler = async () => {
    const data = {
      plan_id: process.env.REACT_APP_SUBSCRIPTION_PLAN_ID,
      total_count: 0,
      quantity: employeeCount,
      customer_notify: 1,
    };

    try {
      const url =
        process.env.REACT_APP_BACKEND_URL + "razorpay/create-subscription";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookies?.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      // setSubscriptionId(result.subscription_id);
      console.log(result)
      subscribeHandler(result.subscription_id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const paymentVerificationHandler = async (response) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      response;

      console.log(response);

    try {
      const url =
        process.env.REACT_APP_BACKEND_URL + "razorpay/payment-verification";

      // Send the payment details to your server
      const verificationResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies?.access_token}`,
        },
        body: JSON.stringify({
          razorpay_payment_id: razorpay_payment_id,
          razorpay_order_id: razorpay_order_id,
          razorpay_signature: razorpay_signature,
        }),
      });

      const result = await verificationResponse.json();
      if (!result.success) {
        throw new Error(result.message);
      }

      toast.success(result.message);
      navigate("/payment-success", {state: {razorpay_payment_id: result.razorpay_payment_id}});
    } catch (err) {
      toast.error(err.message);
      navigate("/payment-failed");
    }
  };

  const subscribeHandler = async (subscriptionId) => {
    const options = {
      key: "rzp_test_PmyWCrtyPnUggn",
      amount: "1000",
      currency: "INR",
      name: "Deepnap Softech",
      description: "Test Transaction",
      image:
        "https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_1280.png",
      subscription_id: subscriptionId,
      handler: paymentVerificationHandler,
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpay = window.Razorpay(options);
    razorpay.open();
  };

  useEffect(() => {
    if (cookies?.access_token) {
      getRazorpayKey();
    }
  }, []);

  return (
    <div className="my-32 mx-auto">
      <h1 className="text-[#24243e] text-4xl mb-10">Checkout Page</h1>

      <div className="border w-[30rem] px-2 gap-2 py-2 flex">
        <button
          disabled={!razorpayKey}
          onClick={createSubscriptionHandler}
          className="w-full py-2 border border-[#ff4c4c] rounded-md text-lg bg-[#ff4c4c] text-white hover:bg-transparent ease-in-out duration-300 hover:text-[#ff4c4c] disabled:cursor-not-allowed"
        >
          Subscribe Now
        </button>
        <button
          disabled={!razorpayKey}
          className="w-full py-2 border border-[#428d1b] rounded-md text-lg bg-[#428d1b] text-white hover:bg-transparent ease-in-out duration-300 hover:text-[#428d1b] disabled:cursor-not-allowed"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
