
import { createClient } from "@supabase/supabase-js"

function getSupabaseClient() {
    
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
}

export default getSupabaseClient

