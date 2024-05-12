import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()


    let { data: AreaOfExpertiseMapping, error } = await supabase
    .from('AreaOfExpertiseMapping')
    .select('*')
            
        
    return NextResponse.json({
        success: true,
        area_of_expertise: AreaOfExpertiseMapping
    })

}