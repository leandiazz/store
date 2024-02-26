import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const data = await request.json();

  if (data.key !== "secret") return NextResponse.json({ success: false });

  if (data.key === "secret") {
    revalidatePath("/productos");
    revalidateTag("producto");
    return NextResponse.json({ success: true, data });
  }
}
// fetch("https://cruelsummer.vercel.app/api/revalidate", {
//   method: "POST",
//   body: JSON.stringify({ key: "secret" }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
