"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { UploadButton } from "@/utils/uploadthing";
import { useQuery } from 'react-query';

export default function Component() {

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


    console.log(area_of_interest)
    console.log(regions)


    return (
        <div className="mx-auto max-w-2xl my-6">
            <div className="py-2 text-center">
                <h1 className="text-3xl font-bold">Create New Project</h1>
            </div>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="ownerName">Owner Name</Label>
                        <Input id="ownerName" placeholder="Enter owner name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="projectName">Project Name</Label>
                        <Input id="projectName" placeholder="Enter project name" required />
                    </div>
                </div>
                <div className="space-y-2 flex flex-col gap-2">
                    <Label htmlFor="description">Project Description</Label>
                    <textarea id="description" className="border-[1px] border-gray-200 p-2 rounded-lg" placeholder="Enter your bio" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="projectBudget">Project Budget</Label>
                        <Input id="projectBudget" placeholder="Enter project budget" type="number" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="projectImage">Project Image</Label>
                    <div className="rounded-xl p-2 border-white bg-red-500">
                        <UploadButton
                            endpoint="mediaPost"
                            onClientUploadComplete={(res) => {
                                console.log("Files: ", res);
                                alert("Upload Completed");
                            }}
                            onUploadError={(error) => {
                                alert(`ERROR! ${error.message}`);
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-2 flex flex-col gap-2">
                    <Label htmlFor="detail">Project Detail</Label>
                    <textarea id="detail" className="border-[1px] border-gray-200 p-2 rounded-lg" placeholder="Enter your bio" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resourcesRequired">Resources Required</Label>
                    <Input id="resourcesRequired" placeholder="Enter resources required" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="currentStatus">Current Status</Label>
                    <Input id="currentStatus" placeholder="What is the current status of the project?" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="deliveryTime">Delivery Time</Label>
                    <Input id="deliveryTime" type="date" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select>
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
                    <Select>
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