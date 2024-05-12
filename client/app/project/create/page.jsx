"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { UploadButton } from "@/utils/uploadthing";

export default function Component() {
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
                    <Select id="currentStatus" required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="planning">Planning</SelectItem>
                            <SelectItem value="inProgress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="onHold">On Hold</SelectItem>
                        </SelectContent>
                    </Select>
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
                            <SelectItem value="region1">Region 1</SelectItem>
                            <SelectItem value="region2">Region 2</SelectItem>
                            <SelectItem value="region3">Region 3</SelectItem>
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
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
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