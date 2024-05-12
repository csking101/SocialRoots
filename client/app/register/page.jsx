import Register from "../../components/Register";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function RegisterPage() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <Register user={user}/>
  )
}
