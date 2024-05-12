import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()

    let { data: AreaOfInterestMapping, error } = await supabase
    .from('AreaOfInterestMapping')
    .select('*')
            
            

    return NextResponse.json({
        success: true,
        area_of_interest: AreaOfInterestMapping
    })

}