import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars.json`);
  if (!res.ok) {
    return new Response("Failed to load cars", { status: 500 });
  }
  const cars = await res.json();
  return NextResponse.json(cars);
}