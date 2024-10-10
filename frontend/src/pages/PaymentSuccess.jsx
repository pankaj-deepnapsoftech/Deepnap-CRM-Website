import { FaCheckCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();

  return (
    <div className="w-[30rem] my-32 mx-auto">
      <div className="flex justify-center">
        <FaCheckCircle color="#0aa910" size="100" />
      </div>
      <div className="text-4xl text-center font-bold mt-4 mb-2">Thank You!</div>
      <div className="text-2xl text-center">Payment Successful</div>
      <div className="text-center">Reference Id: {location?.state?.razorpay_payment_id}</div>
      <div className="text-center mt-4">
        <Link to="/">
          <button
            style={{
              background:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            }}
            className="w-[20rem] border px-8 py-2 text-lg rounded-md text-white ease-in-out duration-500 hover:scale-105"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
