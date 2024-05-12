import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function POST(req) {

    const { name, investmentScale, riskAppetite, background, deliveryTime, region, areaOfExpertise, areaOfInterest, userId } = await req.json()

    console.log({ name, investmentScale, riskAppetite, background, deliveryTime, region, areaOfExpertise, areaOfInterest })

    const supabase = getSupabaseClient()

    const { data, error } = await supabase
        .from('Investor')
        .insert([
            { Investor_Name: name, investment_scale: investmentScale, risk_appetite: riskAppetite, background: background, delivery_time: deliveryTime, area_of_interest: areaOfInterest, region: region, area_of_expertise: areaOfExpertise, userId: userId },
        ])
        .select()

    console.log(error)


    return NextResponse.json({
        success: true,
        projects: data
    })

}