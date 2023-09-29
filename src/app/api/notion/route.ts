import { headers } from 'next/headers'
import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = '6a7234436ab248b7978956ab13aa827b';
  const response: any = await notion.databases.query({ database_id: databaseId });
 
  return NextResponse.json(response.results)
}