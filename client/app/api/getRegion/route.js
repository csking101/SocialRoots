import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()


    let { data: RegionMapping, error } = await supabase
    .from('RegionMapping')
    .select('*')
            
            
        
    return NextResponse.json({
        success: true,
        regions: RegionMapping
    })

}