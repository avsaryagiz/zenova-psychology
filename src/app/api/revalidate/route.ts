import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    if (req.headers.get("Revalidation-Key") !== process.env.REVALIDATION_KEY) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { model } = await req.json();

    console.log("revalidating model: ", model);

    if (model === "video") {
      revalidateTag("videos");
    } else {
      revalidateTag("revalidate");
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
