import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "cars.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const cars = JSON.parse(jsonData);
    return NextResponse.json(cars);
  } catch (error) {
    return new Response("Failed to load cars", { status: 500 });
  }
}