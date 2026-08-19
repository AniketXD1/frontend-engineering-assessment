const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm min-h-[680px] bg-[#06254a] rounded-2xl shadow-lg flex flex-col items-center justify-between py-10 px-6 relative overflow-hidden">
        {/* Confetti */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-12 left-8 text-green-400">•</span>
          <span className="absolute top-20 right-10 text-yellow-400">•</span>
          <span className="absolute top-32 left-16 text-green-300">•</span>
          <span className="absolute top-40 right-20 text-yellow-300">•</span>
          <span className="absolute top-52 left-10 text-blue-300">•</span>
          <span className="absolute top-60 right-8 text-green-400">•</span>
          <span className="absolute top-72 left-20 text-yellow-400">•</span>
          <span className="absolute top-80 right-24 text-green-300">•</span>
          <span className="absolute top-96 left-8 text-yellow-300">•</span>
          <span className="absolute top-[420px] right-12 text-green-400">
            •
          </span>
        </div>

        {/* Success Icon */}
        <div className="relative mt-20">
          <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-6xl font-light">✓</span>
          </div>
        </div>

        {/* Text */}
        <div className="relative text-center">
          <h1 className="text-2xl font-bold text-white">Welcome to Nubpack!</h1>

          <p className="text-white/90 mt-4 text-sm leading-5">
            Your account has been created
            <br />
            successfully.
          </p>
        </div>

        {/* Button */}
        <button
          type="button"
          className="relative w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
