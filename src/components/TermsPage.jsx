import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsPage = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleContinue = () => {
    if (!accepted) return;

    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="text-2xl text-gray-800 hover:text-green-500"
          >
            ←
          </button>

          <h1 className="text-xl font-semibold text-gray-900">
            Terms and Conditions
          </h1>
        </div>

        {/* Last Updated */}
        <p className="text-sm text-gray-600 mb-7">
          Last updated: 22nd May, 2026
        </p>

        {/* Terms */}
        <div className="text-sm text-gray-700 leading-6 space-y-6">
          <p>
            Welcome to Nubpack. These Terms and Conditions ("Terms") govern your
            access to and use of the Nubpack platform ("App"), owned and
            operated by Nubpack.
          </p>

          <p>
            By creating an account or using Nubpack, you agree to be bound by
            these Terms. If you do not agree, please do not use Nubpack.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              1. Eligibility
            </h2>

            <p>
              You must be at least 18 years old to use Nubpack. By using the
              App, you represent and warrant that you meet this age requirement.
            </p>
          </div>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-3 mt-7 cursor-pointer">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />

          <span className="text-sm text-gray-700">
            I agree to the Terms and Conditions
          </span>
        </label>

        {/* Continue */}
        <button
          onClick={handleContinue}
          disabled={!accepted}
          className={`w-full mt-6 py-3 rounded-lg font-semibold text-white transition ${
            accepted
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TermsPage;
