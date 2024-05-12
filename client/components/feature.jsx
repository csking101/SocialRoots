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
              Address global challenges
              </span>
              <h2 className="font-normal text-black mt-8 text-3xl">
                Importance of sustainable investments
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
              SocialRoots aims to develop a platform for sustainability projects and investors
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
                        Address global challenges
                        </strong>{" "}
                        - Climate Change & Environmental Degradation
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
                            United Nation SDG
                        </strong>
                        - Global Agenda & Meaningful progress
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
                        Long-term value
                        </strong>{" "}
                        - Mitigating risks associated with ESG factors
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
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1 flex flex-row items-center ">
              <div
                className=" border- lg:border lg:p-5 lg:rounded-3xl "
              >
                <img src="/1.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
          <div className="h-full lg:mt-0 lg:order-none mt-12 order-1 flex flex-row items-center ">
              <div
                className=" border- lg:border lg:p-5 lg:rounded-3xl "
              >
                <img src="/2.jpeg" alt="" />
              </div>
            </div>
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#b278ef] text-transparent to-green-500 tracking-widest uppercase via-emerald-600">
              Matchmaking platform
              </span>
              <h2 className="font-normal text-black mt-8 text-3xl">
                Smart Graph Infused Matching
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
              We use graph algorithms & machine learning to analyze project and investor attributes.
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
                        User-friendly interface
                        </strong>{" "}
                        — We offer a user-friendly interface for investors to discover, evaluate, and invest in projects aligning with their values and investment criteria.
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
                        Project Showcase
                        </strong>
                        — Enables project owners to showcase initiatives, attract funding, and forge partnerships with like-minded investors.
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
                Bring all stakeholders together
              </span>
              <h2 className="font-normal text-black mt-8 text-3xl">
              All stakeholders on one platform
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">


              
                
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
                          Connect Investors and Project Owners
                        </strong>{" "}
                        - We connects investors and project owners, enabling them to collaborate and create successful projects.
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
                          Ecosystem for Project Owners and Investors
                        </strong>
                        - We empowers project owners and investors to collaborate and create successful sustainable projects
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
                          Collaboration is what we focus on
                        </strong>{" "}
                        - We promote sustainable projects by connecting investors and project owners.
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
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1 flex flex-row items-center ">
              <div
                className=" border- lg:border lg:p-5 lg:rounded-3xl "
              >
                <img src="/3.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;