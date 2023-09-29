import { headers } from "next/headers";
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const block_id = params.id;
  const response = await notion.blocks.children.list({ block_id });

  return NextResponse.json(response);
}
