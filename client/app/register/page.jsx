import Register from "../../components/Register";
import { createClient } from "@/utils/supabase/server";

export default async function RegisterPage() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");0
  }

  return (
    <Register user={user}/>
  )
}
