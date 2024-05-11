import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { ArrowRightIcon } from '@/components/icons/arrow';
import { CalendarClock } from "lucide-react";

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
        timeline: "May 27 - June 21"
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
        timeline: "May 27 - June 21"
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
        timeline: "May 27 - June 21"
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
        timeline: "May 27 - June 21"

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
        timeline: "May 27 - June 21"
    },
]

export default function Explore() {

    return (
        <>
            <section className="min-h-full w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="mx-auto p-5 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">

                    <h2 className="mt-12 mb-4 px-4 text-4xl font-bold text-hackclub-primary">Explore Projects</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6'>
                        {Projects.map((hackathon, index) => (
                            <Card className="relative bg-[#C8F2BB]">

                                <div className="absolute top-4 left-4 bg-[#0D3D00] text-gray-50 px-3 py-1 rounded-t-md rounded-bl-md text-xs font-medium">
                                    {hackathon.mode}
                                </div>


                                <CardHeader>
                                    <img
                                        alt="Hackathon Image"
                                        className="rounded-t-lg object-cover w-full"
                                        height="200"
                                        src={hackathon.image}
                                        style={{
                                            aspectRatio: "300/200",
                                            objectFit: "cover",
                                        }}
                                        width="300"
                                    />
                                </CardHeader>
                                <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                                    <h3 className="text-lg md:text-xl font-semibold">{hackathon.title}</h3>
                                    <p className="text-sm md:text-base text-gray-700 mt-2 line-clamp-2">
                                        {hackathon.description}
                                    </p>
                                    {/* <div className="flex items-center gap-2 mt-4">
                                        <CalendarClock size={22} className="inline" /><span className="text-sm md:text-base font-medium">{hackathon.timeline}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4">
                                        {/* <TrophyIcon className="w-5 h-5 text-[#F59E0B]" />
                                        <span className="text-sm md:text-base font-medium">{hackathon.prize}</span>
                                    </div> */}
                                    <a
                                        className="inline-flex items-center gap-2 text-sm md:text-base font-medium mt-4 text-hackclub-primary-dark hover:underline"
                                        href={hackathon.link}
                                        _target="blank"
                                        rel='noreferrer noopener'
                                    >
                                        Learn More
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
}
