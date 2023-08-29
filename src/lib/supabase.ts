import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_PUBLIC_KEY!,
  process.env.REACT_APP_SUPABASE_SECRET_KEY!,
);
