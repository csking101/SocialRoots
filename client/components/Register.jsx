"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import React from "react"
import { useQuery } from 'react-query';

export default function Register({ user }) {

    const [name, setName] = React.useState("");
    const [investmentScale, setInvestmentScale] = React.useState("");
    const [riskAppetite, setRiskAppetite] = React.useState("");
    const [bio, setBio] = React.useState("");
    const [deliveryTime, setDeliveryTime] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [areaOfExpertise, setAreaOfExpertise] = React.useState("");
    const [areaOfInterest, setAreaOfInterest] = React.useState("");

    const fetchAreaOfInterests = async () => {
        const response = await fetch('/api/getAreaOfInterests');
        if (!response.ok) {
            throw new Error('Failed to fetch AOI');
        }
        return response.json();
    };

    const { data: area_of_interest, isLoadingAOI, isErrorAOI } = useQuery('area_of_interest', fetchAreaOfInterests);

    const fetchAreaOfExpertise = async () => {
        const response = await fetch('/api/getAreaOfExpertise');
        if (!response.ok) {
            throw new Error('Failed to fetch AOE');
        }
        return response.json();
    };

    const { data: area_of_expertise } = useQuery('area_of_expertise', fetchAreaOfExpertise);

    const fetchRegions = async () => {
        const response = await fetch('/api/getRegion');
        if (!response.ok) {
            throw new Error('Failed to fetch Regions');
        }
        return response.json();
    };

    const { data: regions, isLoadingRegions, isErrorRegions } = useQuery('regions', fetchRegions);

    const createInvestors = async () => {
        const response = await fetch(
            '/api/createInvestor',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    investmentScale: investmentScale,
                    riskAppetite: riskAppetite,
                    background: bio,
                    deliveryTime: deliveryTime,
                    region: regions?.regions.find((data) => data.region === region)?.id,
                    areaOfExpertise: area_of_expertise?.area_of_expertise.find((aoi) => aoi.area_of_expertise === areaOfExpertise)?.id,
                    areaOfInterest: area_of_interest?.area_of_interest.find((aoi) => aoi.area_of_interest === areaOfInterest)?.id,
                    userId: user?.id
                }),
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch investors');
        }
        return response.json();
    };

    const { data: investor, refetch } = useQuery('create investor', createInvestors, { enabled: false });

    const submitHandler = (e) => {
        e.preventDefault();
        refetch();
    }

    console.log(user.id)

    return (
        <div className="flex justify-center items-center">
            <div className=" p-3">
                <div className="mx-auto max-w-md space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Investment Questionnaire</h1>
                        <p className="text-gray-500 dark:text-gray-400">Please fill out the form, so that we can personalise the your recommadation.</p>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => submitHandler(e)}>
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-scale">Investment Scale</Label>
                            <Input id="investment-scale" placeholder="Enter investment amount" required type="number" onChange={(e) => setInvestmentScale(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="risk-appetite">Risk Appetite</Label>
                            <Input id="risk-appetite" max="10" min="1" placeholder="Enter risk appetite (1-10)" required type="number" onChange={(e) => setRiskAppetite(e.target.value)} />
                        </div>
                        <div className="space-y-2 flex flex-col gap-2">
                            <Label htmlFor="bio">Bio</Label>
                            <textarea id="bio" className="border-[1px] border-gray-200 p-2 rounded-lg" placeholder="Enter your bio" required onChange={(e) => setBio(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="delivery-time">Delivery Time</Label>
                            <Input id="delivery-time" placeholder="Enter delivery time in months" required type="number" onChange={(e) => setDeliveryTime(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="region">Region</Label>
                            <Select onValueChange={(data) => setRegion(data)} id="region" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select region" />
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
                            <Label htmlFor="area-of-interest">Area of Interest</Label>
                            <Select onValueChange={(data) => setAreaOfInterest(data)} id="area-of-interest" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select area of interest" />
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
                        <div className="space-y-2">
                            <Label htmlFor="area-of-expertise">Area of Expertise</Label>
                            <Select onValueChange={(data) => setAreaOfExpertise(data)} id="area-of-expertise" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select area of expertise" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        area_of_expertise?.area_of_expertise.map((aoi, index) => (
                                            <SelectItem key={index} value={aoi.area_of_expertise}>{aoi.area_of_expertise}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="w-full" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}