import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function POST(req) {

    const { name, description, budget, image, owner, region, resources_required, area_of_interest, detail } = await req.json()

    console.log({ name, description, budget, image, owner, region, resources_required, area_of_interest, detail, currentStatus, deliveryTime })

    const supabase = getSupabaseClient()


    const { data, error } = await supabase
        .from('Project')
        .insert([
            { Project_Name: name, Project_Description: description, Project_Budget: budget, Project_Image: image, Owner_Name: owner, area_of_interest: area_of_interest, region: region, resources_required: resources_required, Project_Detail: detail, current_status: currentStatus, delivery_time: deliveryTime },
        ])
        .select()

    console.log(error)


    return NextResponse.json({
        success: true,
        projects: data
    })

}