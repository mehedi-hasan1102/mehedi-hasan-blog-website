import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const COLLECTION = "visitor_locations";
const DB_NAME = process.env.MONGODB_DB || "portfolio";

/**
 * GET /api/total-visitors
 * Returns the total count of unique visitors from MongoDB
 */
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION);

    // Get total count of all visitor records
    const totalVisitors = await collection.countDocuments();

    return NextResponse.json(
      { 
        totalVisitors,
        message: "Total visitors count fetched successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/total-visitors error:", error);
    return NextResponse.json(
      { error: "Failed to fetch total visitors count" },
      { status: 500 }
    );
  }
}
