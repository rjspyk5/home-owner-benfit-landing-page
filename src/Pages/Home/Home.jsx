export const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-130px)] flex-col md:flex-row items-center">
      <div className="md:w-[60%]">
        <h1 className="md:text-6xl text-[28px] font-semibold md:leading-[5rem] text-white mb-0">
          Power Your Home. Empower Your Future. Switch to Solar Today!
        </h1>
        <ul className="text-[13px] md:text-base list-disc text-white space-y-1 pl-5">
          <li className="pl-1">Experience Lower Electricity Bills with Solar Power</li>
          <li className="pl-1">Clean Energy Independence. Invest in a Greener Future</li>
          <li className="pl-1">Transform Your Roof into a Revenue Stream. Monetize Surplus Solar Energy Through Grid Export</li>
        </ul>
      </div>
      <div className=" md:w-[40%]">
        <div className="p-4 md:p-7 rounded-2xl bg-white">
          <h2 className="md:text-xl font-medium">Complete the steps to unlock your solar potential</h2>
        </div>

      </div>
    </div>
  );
};
