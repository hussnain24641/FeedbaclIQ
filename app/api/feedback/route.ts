
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const { content, email, project_id } = await request.json()

  const { data, error } = await supabase
    .from('feedback')
    .insert({ project_id, content, email, user_type: 'free' })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ success: true, id: data.id })
}