import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const data = await request.json();
  const [date] = new Date().toISOString().split("T");

  if (data.key !== process.env.SECRET)
    return NextResponse.json({ success: false, message: "bad request" });

  revalidatePath("/productos");
  revalidateTag("producto");
  return NextResponse.json({
    message: `successfully revalidated on ${date} :)`,
  });
}
// fetch("https://cruelsummer.vercel.app/api/revalidate", {
//   method: "POST",
//   body: JSON.stringify({ key: "secret" }),
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
