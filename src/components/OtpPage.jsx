import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OTP_DIGITS_COUNT = 6;

const OtpPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill(""),
  );

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handelOnChange = (value, index) => {
    setErrorMessage(null);

    if (isNaN(value)) return;

    console.log(value);

    const newValue = value.trim();

    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handelOnKeyDown = (e, index) => {
    console.log(e);

    if (!e.target.value && e.code === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  const handelVerify = () => {
    // Verify OTP

    // Convert:
    // ["1", "2", "3", "4", "5", "6"]
    //
    // into:
    // "123456"

    const enteredOtp = inputArr.join("");

    // Check if all 6 boxes are filled

    if (enteredOtp.length !== OTP_DIGITS_COUNT) {
      setErrorMessage("Please enter the complete 6-digit code");
      return;
    }

    // Dummy OTP
    if (enteredOtp !== "123456") {
      setErrorMessage("Invalid verification code");
      return;
    }

    // OTP is correct
    setErrorMessage(null);

    navigate("/signup/profile", {
      state: {
        email: email,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Back */}
        <button
          onClick={() => navigate("/signup")}
          className="text-3xl text-gray-800 mb-8"
        >
          ←
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">Verify your email</h1>

        {/* Step */}
        <p className="text-green-500 font-semibold text-lg mt-1">Step 1 of 4</p>

        {/* Email Icon */}
        <div className="flex justify-center mt-8 mb-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-4xl text-green-500">✉</span>
          </div>
        </div>

        {/* Message */}
        <div className="text-center">
          <p className="text-gray-600">We've sent a 6-digit code to</p>

          <p className="font-semibold text-lg mt-1">{email}</p>

          <p className="text-gray-600 mt-2">
            Enter the code below to verify your email
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-2 mt-8">
          {inputArr.map((input, index) => {
            return (
              <input
                key={index}
                type="text"
                value={inputArr[index]}
                ref={(input) => (refArr.current[index] = input)}
                onChange={(e) => handelOnChange(e.target.value, index)}
                onKeyDown={(e) => handelOnKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl border-2 border-gray-200 rounded-lg"
              />
            );
          })}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm text-center mt-4">
            {errorMessage}
          </p>
        )}

        {/* Resend */}
        <p className="text-center text-gray-500 mt-8">
          Didn't receive the code?{" "}
          <span className="text-green-500 font-semibold">Resend</span> in{" "}
          <span className="font-semibold">00:25</span>
        </p>

        {/* Verify */}
        <button
          className="w-full mt-8 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          onClick={handelVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OtpPage;
