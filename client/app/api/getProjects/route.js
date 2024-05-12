import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()

    let { data: Project, error } = await supabase
        .from('Project')
        .select(`
        ProjectID,
        Project_Name,
        Project_Description,
        Project_Budget,
        OwnerID,
        Owner_Name,
        resources_required, 
        current_status,
        delivery_time,
        region,
        area_of_interest,
        RegionMapping ( region ),
        AreaOfInterestMapping ( area_of_interest ),
        Project_Image
      `)
            

    return NextResponse.json({
        success: true,
        projects: Project
    })

}