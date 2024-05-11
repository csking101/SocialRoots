import { createClient } from "@supabase/supabase-js"

export default async function fetchProjects() {

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)


  let { data: Project, error } = await supabase
  .from('Project')
  .select('*')
          

  if (error) {
    throw new Error(error.message)
  }

  console.log(Project)

  return Project

}