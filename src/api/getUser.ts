import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const getUser = async () => {
  const supabase = createClientComponentClient();
  const { data: userData } = await supabase.auth.getUser();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userData.user?.id);

  return profiles;
};