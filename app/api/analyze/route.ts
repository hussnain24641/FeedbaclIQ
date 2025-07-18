import { analyzeFeedback } from '@/lib/ai'
import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { feedback_id } = await request.json()

  const { data: feedback } = await supabase
    .from('feedback')
    .select('*')
    .eq('id', feedback_id)
    .single()

  if (!feedback) return NextResponse.json({ error: 'Feedback not found' }, { status: 404 })

  const analysis = await analyzeFeedback(feedback.content)

  await supabase
    .from('feedback')
    .update({
      category: analysis.category,
      urgency: analysis.urgency,
      sentiment: analysis.sentiment,
      ai_analysis: JSON.stringify(analysis)
    })
    .eq('id', feedback_id)

  return NextResponse.json({ success: true })
}