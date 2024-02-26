import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const data = await request.json();

  if (data.key !== "secret") return NextResponse.json({ success: false });

  if (data.key === "secret") {
    revalidatePath("/productos", "layout");
    return NextResponse.json({ success: true, data });
  }
}

// fetch("http://localhost:3000/api/revalidate", {
//   method: "POST",
//   body: JSON.stringify({ key: "secret" }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
