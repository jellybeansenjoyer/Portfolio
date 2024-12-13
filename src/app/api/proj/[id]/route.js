// src/app/api/achieve/[id]/route.ts

import { NextResponse } from 'next/server';
import projects from '@/constants/projects';
export async function GET(req,  params) {
  const { id } = await params.params;

  // Find the achievement by ID
  const project = projects.find((item) => item.id === Number(id));

  if (project) {
    return NextResponse.json({project});
  } else {
    return NextResponse.json({ error: 'project not found' }, { status: 404 });
  }
}

