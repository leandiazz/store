import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const data = await request.json();

  if (data.key !== "secret") return NextResponse.json({ success: false });

  if (data.key === "secret") {
    revalidateTag("productos");
    return NextResponse.json({ success: true, data });
  }
}

// fetch("http://localhost:3000/api/revalidate", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ key: "secret" })
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));
