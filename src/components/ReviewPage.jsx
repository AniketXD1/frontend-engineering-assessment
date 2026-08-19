import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Country, State } from "country-state-city";
import { useState } from "react";

const ReviewPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState(null);

  const {
    email,
    name,
    dateOfBirth,
    gender,
    country,
    state,
    city,
    role,
    category,
    source,
  } = useSelector((store) => store.signup);

  const countryName = Country.getCountryByCode(country)?.name;

  const stateName = State.getStateByCodeAndCountry(state, country)?.name;

  const handelConfirmCreate = () => {
    setLoading(true);

    console.log({
      email,
      name,
      dateOfBirth,
      gender,
      country,
      state,
      city,
      role,
      category,
      source,
    });

    setTimeout(() => {
      navigate("/signup/success");
    }, 1500);

    // setTimeout(() => {
    //   setLoading(false);
    //   setGlobalError("Failed to create account. Please try again.");
    // }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Back */}
        <button
          onClick={() => navigate("/signup/additional-info")}
          className="text-3xl text-gray-800 mb-6"
        >
          ←
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          Review your information
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

        {/* Review Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-4xl text-green-500">✓</span>
          </div>
        </div>

        {/* Review & Confirm */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold text-gray-900">Review & Confirm</h2>

          <p className="text-gray-600 mt-2">
            Please review your information before submitting
          </p>
        </div>

        {/* Full Name */}
        <div className="mt-6">
          <p className="text-sm text-gray-700">Full Name</p>

          <p className="text-gray-900 font-semibold mt-1">{name}</p>
        </div>

        {/* Email */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">Email</p>

          <p className="text-gray-900 font-semibold mt-1">{email}</p>
        </div>

        {/* Date of Birth */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">Date of Birth</p>

          <p className="text-gray-900 font-semibold mt-1">{dateOfBirth}</p>
        </div>

        {/* Gender */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">Gender</p>

          <p className="text-gray-900 font-semibold mt-1">{gender}</p>
        </div>

        {/* Location */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">Location</p>

          <p className="text-gray-900 font-semibold mt-1">
            {countryName} , {stateName} , {city}
          </p>
        </div>

        {/* Role */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">Role</p>

          <p className="text-gray-900 font-semibold mt-1">{role}</p>
        </div>

        {/* Category */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">Category</p>

          <p className="text-gray-900 font-semibold mt-1">{category}</p>
        </div>

        {/* How did you hear about us */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">How did you hear about us?</p>

          <p className="text-gray-900 font-semibold mt-1">{source}</p>
        </div>

        {globalError && (
          <div className="mt-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
            {globalError}
          </div>
        )}

        {/* Confirm & Create Account */}
        <button
          type="button"
          className="w-full mt-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          onClick={handelConfirmCreate}
        >
          {loading ? "Creating Account..." : "Confirm & Create Account"}
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
