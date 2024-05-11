export default async function ProjectPage({
    params,
}) {

    const Projects = [
        {
            id: 1,
            title: "HackNITR",
            description: "HackNITR is a hackathon conducted by WebClub NITR.",
            image: "https://images.unsplash.com/photo-1664990035720-faac522df41f",
            prize: "upto 10K USD",
            value: "ongoing",
            link: "https://hacknitr.tech",
            mode: "Virtual",
            body: "May 27 - June 21",
            major_contributor: ""
        },
        {
            id: 2,
            title: "soonami",
            description: "HackNITR is a hackathon conducted by WebClub NITR.",
            image: "https://images.unsplash.com/photo-1664990035720-faac522df41f",
            prize: "125K USD",
            value: "ongoing",
            link: "https://hacknitr.tech",
            mode: "In-Person",
            body: "May 27 - June 21",
            major_contributor: ""
        },
        {
            id: 3,
            title: "HackFS",
            description: "HackNITR is a hackathon conducted by WebClub NITR.",
            image: "https://images.unsplash.com/photo-1664990035720-faac522df41f",
            prize: "10K USD",
            value: "ongoing",
            link: "https://hacknitr.tech",
            mode: "Virtual",
            body: "May 27 - June 21",
            major_contributor: ""
        },
        {
            id: 4,
            title: "HackFS",
            description: "HackNITR is a hackathon conducted by WebClub NITR.",
            image: "https://images.unsplash.com/photo-1664990035720-faac522df41f",
            prize: "10K USD",
            value: "past",
            link: "https://hacknitr.tech",
            mode: "Virtual",
            body: "May 27 - June 21",
            major_contributor: ""

        },
        {
            id: 5,
            title: "HackFS",
            description: "HackNITR is a hackathon conducted by WebClub NITR.",
            image: "https://images.unsplash.com/photo-1664990035720-faac522df41f",
            prize: "10K USD",
            value: "upcoming",
            link: "https://hacknitr.tech",
            mode: "Virtual",
            body: "May 27 - June 21",
            major_contributor: ""
        },
    ]

    return (
        <div className="mt-20 pb-10 min-h-screen flex">
            <div className="w-full">
                {Projects ? (
                    <div >
                        <section className="w-full bg-[url('/pattern.jpg')] mb-10 relative">
                            <div className=" flex flex-col text-white py-3 mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg translate-y-8">
                                {/* <div className="flex flex-wrap gap-2">
                                        {projectData?.project_tags.split(",").map((data, index) => {
                                            return (
                                                <span key={index} className="px-2 py-1 bg-purple-600/40 rounded-full">{data}</span>
                                            )
                                        }
                                        )}
                                    </div> */}
                                <div className=" rounded-lg bg-[#ACEB98] flex gap-10 p-10 px-16 overflow-hidden w-[100%] max-h-[500px] mx-auto">
                                    <div className="text-3xl text-[#F4F5F5] font-bold font-sans">
                                        <div>
                                            <img src={Projects[params.id].image} className=" rounded-full w-32 h-32"></img>
                                        </div>
                                    </div>

                                    <div className="text-xl text-[#2A2B2E] flex flex-col gap-6 font-sans">
                                        <div className=" text-[50px] font-semibold">
                                            {Projects[params.id].title}
                                        </div>
                                        <div>
                                            {Projects[params.id].title}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg m-auto">
                            <div className=" text-3xl font-semibold">
                                Portfolio
                            </div>
                        </section>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
