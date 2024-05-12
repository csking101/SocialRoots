import React from "react";
import Link from "next/link";

const Feature = () => {
  return (
    <>
      <section className="relative" aria-labelledby="Featuretwo" id="features">
        <div className="flex justify-between w-full -z-1 absolute flex-row h-full left-0 lg:h-full lg:max-w-7xl lg:px-0 mx-auto px-6 right-0">
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
        </div>
        <div className="relative px-8 lg:px-32 md:px-12 mx-auto max-w-7xl py-12 lg:py-24 space-y-24">
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#b278ef] text-transparent to-green-500 tracking-widest uppercase via-esmerald-600">
                We prioritize farmers
              </span>
              <h2 className="font-normal text-black mt-8 text-3xl">
                Predict crop yield using Machine Learning
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                Harveeco uses Machine Learning to predict crop yield and help farmers make better decisions.
              </p>
              <div className="mt-12 gap-3">
                <ul className="list-none" role="list">
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                          Exhaustive Data Analysis
                        </strong>{" "}
                        — Harveeco uses historical data to predict crop yield
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                          Correctness & Validness with zkML{" "}
                        </strong>
                        — Harveeco makes sure that the predictions are not manipulated by any third party.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                        Optimized Resource Management
                        </strong>{" "}
                        — Harveeco can predict future area needs based on historical data and current market conditions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <Link
                href="/docGen"
                className="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-black focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-[#6112b5] group group-hover:from-[#6112b5] group-hover:to-[#6112b5] inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-[#6112b5] mb-2 mr-2 w-fit mt-6"
              >
                <span className="flex items-center text-black hover:bg-purple-700 duration-75 ease-in relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link> */}
              
            </div>
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div
                className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl"
                x-data=""
                x-tabs=""
              >
                <img src="/1.jpg" />
              </div>
            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl">
                <img src="/2.jpg" />
              </div>
            </div>
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#b278ef] text-transparent to-green-500 tracking-widest uppercase via-emerald-600">
                Onboard in seconds
              </span>
              <h2 className="font-normal text-black mt-8 text-3xl">
                Smart Onboardings using Web3 Auth
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
              Harveeco streamlines the onboarding process for farmers, ensuring a smooth and hassle-free experience.
              </p>
              <div className="mt-12 gap-3">
                <ul className="list-none" role="list">
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                        Farmers
                        </strong>{" "}
                        — Join Harveeco seamlessly with Aadhar Anon SDK for secure, privacy-preserving identity verification
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                        Web3 Users
                        </strong>
                        — Connect instantly using your existing digital wallet via Privy.
                      </p>
                    </div>
                  </li>
                  
                </ul>
              </div>

              {/* <Link
                href="/testGen"
                className="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-black focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-[#6112b5] group group-hover:from-[#6112b5] group-hover:to-[#6112b5] inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-[#6112b5] mb-2 mr-2 w-fit mt-6"
              >
                <span className="flex items-center text-black hover:bg-purple-700 duration-75 ease-in relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link> */}

            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#b278ef] text-transparent to-green-500 tracking-widest uppercase via-emerald-600">
                Farmers Rewarded, Companies Empowered
              </span>
              <h2 className="font-normal text-black mt-8 text-3xl">
              A Symbiotic Relationship in Agriculture
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
              A symbiotic relationship between farmers and companies, fostered by Harveeco's innovative platform
              </p>
              <div className="mt-12 gap-3">
                <ul className="list-none" role="list">
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                          Incentives for Farmers
                        </strong>{" "}
                        — We provide farmers with rewards based on their efforts and accurate crop predictions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                          Data-Driven Marketplace
                        </strong>
                        — Big companies leverage our platform to access real-time crop prediction data, enabling informed business decisions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-800">
                          Mutually Beneficial Ecosystem
                        </strong>{" "}
                        — This unique system connects farmers and companies, fostering collaboration and shared success in the agricultural sector
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <Link
                href="/refactor"
                className="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-black focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-[#6112b5] group group-hover:from-[#6112b5] group-hover:to-[#6112b5] inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-[#6112b5] mb-2 mr-2 w-fit mt-6"
              >
                <span className="flex items-center text-black hover:bg-purple-700 duration-75 ease-in relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link> */}

            </div>
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div
                className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl"
              >
                <img src="/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;