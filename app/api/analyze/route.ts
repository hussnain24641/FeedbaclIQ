import { analyzeFeedback } from '@/lib/ai'
import { supabase } from '@/lib/supabase'
export async function POST(req: Request) {
  const { feedback_id } = await req.json()
  const { data: fb } = await supabase.from('feedback').select('*').eq('id', feedback_id).single()
  const analysis = await analyzeFeedback(fb.content)
  await supabase.from('feedback').update({ ...analysis, ai_analysis: JSON.stringify(analysis) }).eq('id', feedback_id)
  return new Response(JSON.stringify({ success: true }))
}
