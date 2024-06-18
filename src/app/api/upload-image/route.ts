import { supabase, uploadResume } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    
    const { data, error } = await supabase.storage
      .from("bucket")
      .upload(`images/${Date.now()}.jpg`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) throw error;
    const imgurl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET}/${data.path}`
    return NextResponse.json({ message: "File uploaded successfully", imgurl });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 },
    );
  }
}
