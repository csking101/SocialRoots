import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()

    let { data: Project, error } = await supabase
        .from('Project')
        .select('*')
            

    return NextResponse.json({
        success: true,
        projects: Project
    })

}