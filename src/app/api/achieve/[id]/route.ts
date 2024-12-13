// src/app/api/achieve/[id]/route.ts


import { NextResponse } from 'next/server';
import  achievements  from '@/constants/achievements';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  // Find the achievement by ID
  const achievement = achievements.find((item) => item.id === Number(id));

  if (achievement) {
    return NextResponse.json({achievement});
  } else {
    return NextResponse.json({ error: 'Achievement not found' }, { status: 404 });
  }
}
