import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../../utils/validate";
import { useDispatch } from "react-redux";
import { setEmail } from "../../utils/signupSlice";

const LoginPage = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);

  const handelButtonClick = () => {
    const message = checkValidData(email.current.value);

    setErrorMessage(message);
    // Stop if email is invalid
    if (message) return;

    dispatch(setEmail(email.current.value));

    console.log(message);

    // Email is valid → go to OTP page

    navigate("/signup/otp", {
      state: {
        email: email.current.value,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Back */}
        <button
          onClick={() => navigate("/terms")}
          className="text-3xl text-gray-800 mb-8"
        >
          ←
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          Create your account
        </h1>

        {/* Step */}
        <p className="text-green-500 font-semibold text-lg mt-1">Step 1 of 4</p>

        {/* Email Icon */}
        <div className="flex justify-center mt-8 mb-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-4xl text-green-500">✉</span>
          </div>
        </div>

        {/* Email Text */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Let's start with your email
          </h2>

          <p className="text-gray-600 mt-2">
            We'll send you a verification code
          </p>
        </div>

        {/* Email Input */}
        <form>
          <input
            ref={email}
            type="email"
            placeholder="Enter your email address"
            onChange={() => {
              const message = checkValidData(email.current.value);
              setErrorMessage(message);
            }}
            className="w-full mt-8 px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          />
        </form>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        {/* Button */}
        <button
          className="w-full mt-8 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          onClick={handelButtonClick}
        >
          Send Verification Code
        </button>

        {/* Login */}
        <p className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-green-500 font-semibold hover:text-green-600"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
