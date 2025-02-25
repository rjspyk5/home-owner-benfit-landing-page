export const SuccessMessage = () => (
  <div className="text-center space-y-3 sm:space-y-4 py-8 sm:py-12 px-4 sm:px-6 max-w-2xl mx-auto">
    <h2 className="text-xl sm:text-2xl font-bold text-[#003B87] mb-2">
      Thank you for your response
    </h2>
    <p className="text-lg sm:text-xl">
      You&re about to save estimated
      <br />
      <span className="text-2xl sm:text-3xl font-bold text-[#34D7A1]">18,000 USD.</span>
    </p>
    <p className="text-gray-600 text-sm sm:text-base">
      We&ll contact with you soon with
      <br />
      proper credentials.
    </p>
    <button 
      onClick={() => window.location.href = '/'}
      className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 bg-[#003B87] text-white border border-[#003B87] rounded-full cursor-pointer hover:bg-white hover:text-[#003B87] transition-all text-sm sm:text-base"
    >
      Back To Home
    </button>
  </div>
);
