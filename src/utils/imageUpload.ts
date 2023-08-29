import { supabase } from "../lib/supabase";

//image upload using supabase

export async function ImageUpload(file: File): Promise<string> {
  const imageUrl = await supabase.storage.from("family-reward-files").upload(`task/${file.name}`, file);

  const databaseUrl = `${process.env.REACT_APP_SUPABASE_PUBLIC_KEY}/storage/v1/object/public/family-reward-files/${imageUrl.data?.path}`;

  return databaseUrl;
}
