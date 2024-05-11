import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()

    let { data: Investor, error } = await supabase
        .from('Investor')
        .select('*')
            

    return NextResponse.json({
        success: true,
        investors: Investor
    })

}