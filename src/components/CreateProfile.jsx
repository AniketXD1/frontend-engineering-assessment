import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileValidate } from "../../utils/profileValidate";
import { dobValidate } from "../../utils/dobValidate";
import { genderValidate } from "../../utils/genderValidate";

import { useDispatch } from "react-redux";
import { setName, setDataOfBirth, setGender } from "../../utils/signupSlice";

const CreateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const [dateError, setDateError] = useState(null);

  const [errorGender, setErrorGender] = useState(null);

  const name = useRef(null);
  const dateOfBirth = useRef(null);

  const genderSelect = useRef(null);

  const handelButtonContinue = () => {
    const message = profileValidate(name.current.value);

    const dateMessage = dobValidate(dateOfBirth.current.value);

    const genderMessage = genderValidate(genderSelect.current.value);

    setErrorMessage(message);
    setDateError(dateMessage);
    setErrorGender(genderMessage);

    if (message || dateMessage || genderMessage) return;
    dispatch(setName(name.current.value));
    dispatch(setDataOfBirth(dateOfBirth.current.value));
    dispatch(setGender(genderSelect.current.value));

    navigate("/signup/location");
    console.log("Name and Date of Birth are valid");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Back */}
        <button
          onClick={() => navigate("/signup/otp")}
          className="text-3xl text-gray-800 mb-6"
        >
          ←
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          Create your profile
        </h1>

        {/* Step */}
        <p className="text-green-500 font-semibold text-lg mt-1">Step 2 of 4</p>

        {/* Progress Bar */}
        <div className="flex gap-1 mt-3">
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-gray-200 rounded"></div>
          <div className="h-1 flex-1 bg-gray-200 rounded"></div>
        </div>

        {/* Profile Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-4xl text-green-500">♙</span>
          </div>
        </div>

        {/* Personal Information */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            Personal Information
          </h2>

          <p className="text-gray-600 mt-2">Tell us a little about yourself</p>
        </div>

        {/* Full Name */}
        <div className="mt-6">
          <label className="block text-sm text-gray-700 mb-1">Full Name</label>

          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            maxLength={50}
            onChange={() => {
              const message = profileValidate(name.current.value);
              setErrorMessage(message);
            }}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        {/* Date of Birth */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">
            Date of Birth
          </label>

          <input
            ref={dateOfBirth}
            type="date"
            max={new Date().toISOString().split("T")[0]}
            onChange={() => {
              const message = dobValidate(dateOfBirth.current.value);
              setDateError(message);
            }}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          />
        </div>

        {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}

        {/* Gender */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">Gender</label>

          <select
            ref={genderSelect}
            onChange={() => {
              const message = genderValidate(genderSelect.current.value);
              setErrorGender(message);
            }}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {errorGender && (
          <p className="text-red-500 text-sm mt-2">{errorGender}</p>
        )}

        {/* Continue */}
        <button
          type="button"
          className="w-full mt-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          onClick={handelButtonContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
