import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function POST(req) {

    const { id } = await req.json()

    console.log(req.json())

    const supabase = getSupabaseClient()

    let { data: Project, error } = await supabase
        .from('Project')
        .select('*')
        .eq('ProjectID', id)


    return NextResponse.json({
        success: true,
        projects: Project
    })

}