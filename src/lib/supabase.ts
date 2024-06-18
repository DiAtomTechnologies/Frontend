import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabaseurl = process.env.SUPABASE_URL as string
const supabaseanon = process.env.SUPABASE_ANON as string

export const supabase = createClient(supabaseurl, supabaseanon)

export const uploadResume = async (file: File) => {
  const id  = uuidv4();
  try {
    const { data, error } = await supabase.storage
      .from("bucket")
      .upload(`resumes/${id}.pdf`, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      throw error;
    }
    return id
  } catch (err) {
    console.error('Error uploading file:', err);
    throw err;
  }
};
