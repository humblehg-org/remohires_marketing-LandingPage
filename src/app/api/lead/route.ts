import { NextResponse } from "next/server";

const FRM_API_URL =
  process.env.FRM_API_URL || "https://frm-v1.remohires.com/api/submit";
const FRM_API_KEY = process.env.FRM_API_KEY;

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    qualifier?: string;
    source?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const { name, email, qualifier, source } = body;
  if (!name || !email || !source) {
    return NextResponse.json(
      { success: false, message: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!FRM_API_KEY) {
    console.error(
      "FRM_API_KEY is not configured — lead was not submitted to the backend.",
    );
    return NextResponse.json(
      {
        success: false,
        message: "Lead capture is temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  try {
    const upstream = await fetch(FRM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": FRM_API_KEY,
      },
      body: JSON.stringify({ name, email, qualifier, source }),
    });

    const data: { success?: boolean; message?: string } | null = await upstream
      .json()
      .catch(() => null);

    if (!upstream.ok || !data?.success) {
      return NextResponse.json(
        {
          success: false,
          message: data?.message || "Something went wrong. Please try again.",
        },
        { status: upstream.ok ? 502 : upstream.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission to backend failed:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
