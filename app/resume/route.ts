import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Redirect to the static PDF in /public
  const url = new URL(request.url);
  url.pathname = "/Resume_of_Mehedi_Hasan.pdf";
  return NextResponse.redirect(url, 307);
}
