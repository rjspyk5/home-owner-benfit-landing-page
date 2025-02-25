export const SuccessMessage = () => {
  return (
    <div className=" space-y-3 sm:space-y-4 py-8 sm:py-12 px-4 sm:px-6 max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-center md:text-[34px] font-bold mb-2">
        Thank you for your response
      </h2>
      <div className="w-[80%] h-[1px] mx-auto my-7 bg-black"></div>
      <p className="text-lg md:text-xl font-semibold">
        You&apos;re about to save estimated <br /> 18,000 USD.
      </p>
      <p className="font-medium  text-sm sm:text-base">
        We&apos;ll contact with you soon with
        <br />
        proper credentials.
      </p>
      <div className="mt-6  sm:mt-8 flex justify-center">
        <a
          href="/"
          className=" px-4 sm:px-6 py-3 bg-[#003B87] text-white border border-[#003B87] rounded-full cursor-pointer hover:bg-white hover:text-[#003B87] transition-all text-sm sm:text-base"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
};
