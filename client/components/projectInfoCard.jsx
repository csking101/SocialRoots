"use client"

import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { ArrowRightIcon } from '@/components/icons/arrow';
import { useQuery } from 'react-query';
import axios from "axios";

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

    const fetchUsers = async () => {
        const response = await fetch('/api/getUsers');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return response.json();
    };

    const { data: user, isLoadingUser, isErrorUser } = useQuery('user', fetchUsers);

    const myUser = user?.user[5];

    const fetchRecommendedProjectsforOwner = async () => {
        const response = await axios.get('http://127.0.0.1:8000/pfp');

        console.log("project sorted ids: ", response)

        return response.data;
    };

    const { data: projectsID, isLoading, isError, refetch } = useQuery(['projectsID', myUser?.id], fetchRecommendedProjectsforOwner, { enabled: false });

    const fetchRecommendedProjectsforInvestors = async () => {
        const response = await axios.get('http://127.0.0.1:8000/pfi');
        return response.data;
    };

    const { data: projectsforInvestors, refetch:getRecommendedProject } = useQuery(['projects', myUser?.id,"for investors"], fetchRecommendedProjectsforInvestors, { enabled: false });

    console.log(projectsID)

    if (myUser?.role == "OWNER") {

        console.log("Owner")
        if (!projectsID) {
            refetch()
        }

    }

    else {
        if (!projectsforInvestors) {
            getRecommendedProject()
        }
    }

    // fetch projects recommended by ML algo

    const fetchProjects = async () => {
        const response = await fetch('/api/getProjects');
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    };


    const { data: allProjects } = useQuery('allprojects', fetchProjects);



    return (
        <>
            <section className="min-h-full w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="mx-auto p-5 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">

                    <h2 className="mt-12 mb-4 px-4 text-4xl font-bold text-hackclub-primary">Explore Projects</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6'>
                         {allProjects?.projects.map((project, index) => (
                            <Card className="relative bg-[#C8F2BB]">
                                <CardHeader>
                                    <img
                                        alt="Hackathon Image"
                                        className="rounded-t-lg object-cover w-full"
                                        height="200"
                                        src={project.Project_Image ? project.Project_Image : "https://images.unsplash.com/photo-1664990035720-faac522df41f"}
                                        style={{
                                            aspectRatio: "300/200",
                                            objectFit: "cover",
                                        }}
                                        width="300"
                                    />
                                </CardHeader>
                                <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                                    <h3 className="text-lg md:text-xl font-semibold">{project.Project_Name}</h3>
                                    <p className="text-sm md:text-base text-gray-700 mt-2 line-clamp-2">
                                        {project.Project_Description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-3">

                                        <div className="bg-[#0D3D00] text-gray-50 px-3 py-1 rounded-t-md rounded-bl-md text-xs font-medium">
                                            {project.AreaOfInterestMapping["area_of_interest"]}
                                        </div>

                                    </div>
                                    {/* <div className="flex items-center gap-2 mt-4">
                                        <CalendarClock size={22} className="inline" /><span className="text-sm md:text-base font-medium">{hackathon.timeline}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4">
                                         <TrophyIcon className="w-5 h-5 text-[#F59E0B]" />
                                        <span className="text-sm md:text-base font-medium">{hackathon.prize}</span>
                                    </div> */}
                                    <a
                                        className="inline-flex items-center gap-2 text-sm md:text-base font-medium mt-4 text-hackclub-primary-dark hover:underline"
                                        href={`/project/${project.ProjectID}`}
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
