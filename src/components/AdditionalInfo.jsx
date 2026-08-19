import { useNavigate } from "react-router-dom";
import { additionalInfoValidate } from "../../utils/additionalInfoValidate";
import { useRef, useState } from "react";
import { setRole, setCategory, setSource } from "../../utils/signupSlice";
import { useDispatch } from "react-redux";

const AdditionalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const role = useRef(null);
  const category = useRef(null);
  const source = useRef(null);

  const handelAdditionInfo = () => {
    const message = additionalInfoValidate(
      role.current.value,
      category.current.value,
      source.current.value,
    );

    setErrorMessage(message);

    if (message) return;
    dispatch(setRole(role.current.value));
    dispatch(setCategory(category.current.value));
    dispatch(setSource(source.current.value));

    navigate("/signup/review");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Back */}
        <button
          onClick={() => navigate("/signup/location")}
          className="text-3xl text-gray-800 mb-6"
        >
          ←
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          Create your profile
        </h1>

        {/* Step */}
        <p className="text-green-500 font-semibold text-lg mt-1">Step 4 of 4</p>

        {/* Progress Bar */}
        <div className="flex gap-1 mt-3">
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
        </div>

        {/* Content will go here */}

        {/* Additional Info Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-4xl text-green-500">📖</span>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            Additional Information
          </h2>
        </div>

        {/* Role */}
        <div className="mt-6">
          <label className="block text-sm text-gray-700 mb-1">
            Select your role
          </label>

          <select
            ref={role}
            onChange={() => {
              const message = additionalInfoValidate(
                role.current.value,
                category.current.value,
                source.current.value,
              );

              setErrorMessage(message);
            }}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          >
            <option value="">Select role</option>
            <option value="creator">Creator</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        {/* Category */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">
            Select your category
          </label>

          <select
            ref={category}
            onChange={() => {
              const message = additionalInfoValidate(
                role.current.value,
                category.current.value,
                source.current.value,
              );

              setErrorMessage(message);
            }}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          >
            <option value="">Select category</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* How did you hear about us */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">
            How did you hear about us?
          </label>

          <select
            ref={source}
            onChange={() => {
              const message = additionalInfoValidate(
                role.current.value,
                category.current.value,
                source.current.value,
              );

              setErrorMessage(message);
            }}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          >
            <option value="">Select an option</option>
            <option value="google">Google</option>
            <option value="social-media">Social Media</option>
            <option value="friend">Friend or Family</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Error */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        {/* Continue */}
        <button
          type="button"
          className="w-full mt-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          onClick={handelAdditionInfo}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
