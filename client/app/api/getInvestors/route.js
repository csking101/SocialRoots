import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()

    let { data: Investor, error } = await supabase
        .from('Investor')
        .select(
            `
            InvestorID,
            Investor_Name,
            investment_scale,
            risk_appetite,
            background,
            delivery_time,
            region,
            area_of_interest,
            area_of_expertise,
            RegionMapping ( region ),
            AreaOfInterestMapping ( area_of_interest ),
            AreaOfExpertiseMapping ( area_of_expertise )
            `
        )
            

    return NextResponse.json({
        success: true,
        investors: Investor
    })

}