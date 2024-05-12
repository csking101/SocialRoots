"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { UploadButton } from "@/utils/uploadthing";
import { useQuery } from 'react-query';
import { useState } from "react"

export default function Component() {

    const [ownerName, setOwnerName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [projectBudget, setProjectBudget] = useState('');
    const [detail, setDetail] = useState('');
    const [resourcesRequired, setResourcesRequired] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [region, setRegion] = useState('');
    const [areaOfInterest, setAreaOfInterest] = useState('');
    const [imageLink, setImageLink] = useState();

    const fetchAreaOfInterests = async () => {
        const response = await fetch('/api/getAreaOfInterests');
        if (!response.ok) {
            throw new Error('Failed to fetch AOI');
        }
        return response.json();
    };

    const { data: area_of_interest, isLoadingAOI, isErrorAOI } = useQuery('area_of_interest', fetchAreaOfInterests);

    const fetchRegions = async () => {
        const response = await fetch('/api/getRegion');
        if (!response.ok) {
            throw new Error('Failed to fetch Regions');
        }
        return response.json();
    };

    const { data: regions, isLoadingRegions, isErrorRegions } = useQuery('regions', fetchRegions);

    const createProjects = async () => {
        const response = await fetch(
            '/api/createProject',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: projectName,
                    description: description,
                    budget: projectBudget,
                    image: imageLink,
                    owner: ownerName,
                    region: regions?.regions.find((data) => data.region === region)?.id,
                    resources_required: resourcesRequired,
                    area_of_interest: area_of_interest?.area_of_interest.find((aoi) => aoi.area_of_interest === areaOfInterest)?.id,
                    detail: detail,
                    currentStatus: currentStatus,
                    deliveryTime: deliveryTime
                }),
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    };

    const { data: project, refetch } = useQuery('create project', createProjects, { enabled: false });

    const submitHandler = (e) => {
        e.preventDefault();
        refetch();
    }

    return (
        <div className="mx-auto max-w-2xl my-6">
            <div className="py-2 text-center">
                <h1 className="text-3xl font-bold">Create New Project</h1>
            </div>
            <form className="space-y-4" onSubmit={(e) => submitHandler(e)}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="ownerName">Owner Name</Label>
                        <Input id="ownerName" placeholder="Enter owner name" required onChange={(e) => setOwnerName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="projectName">Project Name</Label>
                        <Input id="projectName" placeholder="Enter project name" required onChange={(e) => setProjectName(e.target.value)} />
                    </div>
                </div>
                <div className="space-y-2 flex flex-col gap-2">
                    <Label htmlFor="description">Project Description</Label>
                    <textarea id="description" className="border-[1px] border-gray-200 p-2 rounded-lg" placeholder="Enter your project description" required onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="projectBudget">Project Budget (in Ruppees)</Label>
                        <Input id="projectBudget" placeholder="Enter project budget" type="number" required onChange={(e) => setProjectBudget(e.target.value)} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="projectImage">Project Image</Label>
                    {imageLink
                        ? <div className="rounded-xl text-center text-white p-2 w-full font-semibold text-xl border-white bg-red-500">
                            Uploaded Picture
                        </div>
                        : <div className="rounded-xl p-2 border-white bg-red-500">
                            <UploadButton
                                endpoint="mediaPost"
                                onClientUploadComplete={(res) => {
                                    console.log("Files: ", res);
                                    setImageLink(res[0].url);
                                    alert("Upload Completed");
                                }}
                                onUploadError={(error) => {
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        </div>
                    }
                </div>
                <div className="space-y-2 flex flex-col gap-2">
                    <Label htmlFor="detail">Project Detail</Label>
                    <textarea id="detail" className="border-[1px] border-gray-200 p-2 rounded-lg" placeholder="Enter your project detail" required onChange={(e) => setDetail(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resourcesRequired">Resources Required</Label>
                    <Input id="resourcesRequired" placeholder="Enter resources required" required onChange={(e) => setResourcesRequired(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="currentStatus">Current Status</Label>
                    <Input id="currentStatus" placeholder="funding which project already have" required onChange={(e) => setCurrentStatus(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="deliveryTime">Delivery Time</Label>
                    <Input id="deliveryTime" type="number" required onChange={(e) => setDeliveryTime(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select onValueChange={(data) => setRegion(data)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Enter region" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                regions?.regions.map((region, index) => (
                                    <SelectItem key={index} value={region.region}>{region.region}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="areaOfInterest">Area of Interest</Label>
                    <Select onValueChange={(data) => setAreaOfInterest(data)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Enter area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                area_of_interest?.area_of_interest.map((aoi, index) => (
                                    <SelectItem key={index} value={aoi.area_of_interest}>{aoi.area_of_interest}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Create Project</Button>
                </div>
            </form>
        </div>
    )
}