import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/terms");
  };

  return (
    <div className="min-h-screen bg-[#0b264d] flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="w-64 mb-8 ">
        <img src="/logo.png" alt="Nubpack logo" className="w-full h-auto" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Welcome to Nubpack
      </h1>

      {/* Description */}
      <p className="text-gray-300 text-lg max-w-md mb-8">
        Empowering creators to educate and inspire.
      </p>

      {/* Button */}
      <button
        onClick={handleGetStarted}
        className="w-full max-w-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
