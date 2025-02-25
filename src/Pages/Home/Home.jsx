import { ProgressAndForm } from "./ProgressAndForm/ProgressAndForm";

export const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-130px)] flex-col md:flex-row items-center">
      <div className="lg:w-[60%] md:p-2  md:w-[50%] w-full">
        <h1 className="lg:text-6xl text-[27px] mt-7 md:!mt-0 md:mb-12 mb-8 font-semibold lg:leading-[5rem] text-white">
          Power Your Home. Empower Your Future. Switch to Solar Today!
        </h1>
        <ul className="text-[12px] lg:text-base list-disc text-white space-y-1 pl-5  md:max-w-xl">
          <li className="pl-1">Experience Lower Electricity Bills with Solar Power</li>
          <li className="pl-1">Clean Energy Independence. Invest in a Greener Future</li>
          <li className="pl-1">Transform Your Roof into a Revenue Stream. Monetize Surplus Solar Energy Through Grid Export</li>
        </ul>
      </div>
      <div className="w-full md:p-2 md:w-[50%] lg:w-[40%]">
        <div className="p-5 md:p-7 my-10 md:my-0 rounded-2xl bg-white max-w-3xl ">
          
          <ProgressAndForm/>
        </div>
      </div>
    </div>
  );
};
