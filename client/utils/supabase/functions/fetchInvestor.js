import { createClient } from "@supabase/supabase-js"

export default async function fetchInvestors() {

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)


  let { data: Investor, error } = await supabase
  .from('Investor')
  .select('*')
          

  if (error) {
    throw new Error(error.message)
  }

  console.log(Investor)

  return Investor

}