import { NextRequest, NextResponse } from 'next/server'
import getSupabaseClient from '@/utils/supabase/client'

export async function GET() {

    const supabase = getSupabaseClient()


    let { data: User, error } = await supabase
    .from('User')
    .select('*')
            
        
    return NextResponse.json({
        success: true,
        user: User
    })

}