import { notFound } from "next/navigation";
import gfm from 'remark-gfm'
import ReactMarkdown from "react-markdown";

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
                        <section className="w-full bg-[#B6CEB9] mb-10">
                            <div className=" flex flex-col text-white py-3 mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg">
                                {/* <div className="flex flex-wrap gap-2">
                                        {projectData?.project_tags.split(",").map((data, index) => {
                                            return (
                                                <span key={index} className="px-2 py-1 bg-purple-600/40 rounded-full">{data}</span>
                                            )
                                        }
                                        )}
                                    </div> */}
                                <div className="text-3xl text-[#F4F5F5] font-bold font-sans mt-4">
                                    {Projects[params.id].title}
                                </div>
                                <div className=" rounded-lg overflow-hidden w-[100%] max-h-[500px] mx-auto mt-6">
                                    <img src={Projects[params.id].image} />
                                </div>
                                <div className="text-xl text-[#2A2B2E] font-thin font-sans mt-2">
                                    {Projects[params.id].description}
                                </div>
                                <div className="text-xl text-purple-200/90 font-medium font-sans mt-6 flex justify-between items-center">
                                    <span>{Projects[params.id].major_contributor}</span>
                                </div>
                            </div>
                        </section>
                        <ReactMarkdown remarkPlugins={[gfm]} className="prose mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg text-black">{Projects[params.id].body}</ReactMarkdown>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
