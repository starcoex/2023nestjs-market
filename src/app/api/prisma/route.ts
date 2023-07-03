import client from "@/libs/client";
import { NextResponse } from "next/server";

export async function GET() {
  // await client.user.create({
  //   data: {
  //     phone: 5454545,
  //     email: "stareoxe@gmail.com",
  //     name: "Kim",
  //   },
  // });
  return NextResponse.json({
    ok: true,
    data: "xxx",
  });
}
