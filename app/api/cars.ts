import { NextResponse } from "next/server";
import cars from "/cars.json"; // ajustează calea în funcție de locul fișierului

export async function GET() {
  return NextResponse.json(cars);
}
