import Link from 'next/link';

export default function Hero() {
    return (
        // <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-green-900 to-green-600 bg-cover bg-center">
        //     <div className="container px-4 md:px-6 text-center space-y-6">
        //         <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Social Roots</h1>
        //         {/* <p className="max-w-[600px] mx-auto text-lg md:text-xl text-gray-500">
        //                 Discover and share hackathons, connect with like-minded individuals, and form teams to bring your ideas to
        //                 life.
        //             </p> */}
        //     </div>
        // </section>

        <section className="relative w-full bg-black rounded-b-2xl" id="hero">
                <div class="flex justify-between w-full -z-[1px] absolute flex-row h-full left-0 lg:h-full lg:max-w-7xl lg:px-0 mx-auto px-6 right-0">
                    <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                    <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                    <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                    <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                    <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                    <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                </div>
                <section>
                    <div class="items-center relative max-w-7xl mx-auto w-full lg:px-16 md:px-12 lg:pb-24 lg:pt-30 pb-12 pt-32 px-5">
                        <div class="max-w-5xl mx-auto">
                            <div class="md:text-center text-left">
                                <div class="max-w-4xl gap-6 lg:gap-12 lg:items-end mx-auto">
                                    <div className='flex flex-col justify-center items-center'>

                                        <img className="" src="./bg2.png" height="150" width="150">
                                        </img>

                                        <h1 class="font-medium mt-8 text-[65px] leading-[74px] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-200 via-slate-300 to-slate-600">SocialRoots</h1>

                                        <p className="font-semithin text-2xl leading-7 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-100 via-slate-300 to-slate-600 m-2 p-4">Connecting Passions, Cultivating Progress</p>

                                    </div>
                                </div>
                                <div class="flex flex-col gap-3 lg:items-center lg:justify-center mt-12 sm:flex-row">
                                    <Link href="/explore" class="items-center relative text-sm  focus:ring-[#e0ffe7] hover:text-gray-900 dark:text-white border-2 border-cyan-100 focus:ring-4 font-medium from-[#82bc92] group group-hover:from-[#77d68a] group-hover:to-[#59d973] inline-flex justify-center overflow-hidden  text-gray-900 to-[#6112b5] focus:shadow-lg mb-2 mr-2 w-fit rounded-full" id="hero-landing-cta-button">

                                        
                           
                                        <span class="flex items-center justify-center text-white duration-300 ease-in  relative rounded-full transition-all py-2.5 px-5 hover:bg-cyan-100 hover:text-black">Get started
                                            </span>
                   
                                        
                                    </Link>


                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


    )
}

// export default function Hero() {
//     return (
//         <>
//             <section className="relative w-full" id="hero">
//                 <div class="flex justify-between w-full -z-[1px] absolute flex-row h-full left-0 lg:h-full lg:max-w-7xl lg:px-0 mx-auto px-6 right-0">
//                     <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
//                     <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
//                     <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
//                     <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
//                     <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
//                     <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
//                 </div>
//                 <section>
//                     <svg class="blur-3xl absolute opacity-80 right-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" height="100%" width="50%"><g clip-path="url(#clip0_17_60)"><g filter="url(#filter0_f_17_60)"><path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="rgba(117, 83, 172, 0.5)"></path><path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="rgba(117, 83, 172, 0.6)"></path></g></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="719.867" id="filter0_f_17_60" width="719.867" x="-159.933" y="-159.933"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in2="BackgroundImageFix" result="shape" in="SourceGraphic" mode="normal"></feBlend><feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_60"></feGaussianBlur></filter></defs></svg>
//                     <div class="items-center relative max-w-7xl mx-auto w-full lg:px-16 md:px-12 lg:pb-24 lg:pt-30 pb-12 pt-32 px-5">
//                         <div class="max-w-5xl mx-auto">
//                             <div class="md:text-center text-left">
//                                 <div class="max-w-4xl gap-6 lg:gap-12 lg:items-end mx-auto">
//                                     <div>
//                                         <img className="" src="/logo_crop.png" height="150" width="150">
//                                         </img>

//                                         <h1 class="font-medium mt-8 text-[65px] leading-[74px] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-200 via-slate-300 to-slate-600">Harveeco is a way to put farmers incharge of their data</h1>

//                                         <p className="font-semithin text-2xl leading-7 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-100 via-slate-300 to-slate-600 m-2 p-4">Empowering farmers with comprehensive solutions</p>

//                                     </div>
//                                 </div>
//                                 <div class="flex flex-col gap-3 lg:items-center lg:justify-center mt-12 sm:flex-row">
//                                     <Link href="#features" class="items-center relative text-sm  focus:ring-[#e0ffe7] hover:text-gray-900 dark:text-white border-2 border-cyan-100 focus:ring-4 font-medium from-[#82bc92] group group-hover:from-[#77d68a] group-hover:to-[#59d973] inline-flex justify-center overflow-hidden  text-gray-900 to-[#6112b5] focus:shadow-lg mb-2 mr-2 w-fit rounded-full" id="hero-landing-cta-button">

//                                         <span class="flex items-center justify-center text-white duration-300 ease-in  relative rounded-full transition-all py-2.5 px-5 hover:bg-cyan-100 hover:text-black">Get started
//                                         </span>

                                        
//                                     </Link>


                                    

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </section>
//         </>
//     )
// }