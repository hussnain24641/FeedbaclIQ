import { supabase } from '@/lib/supabase'
export async function POST(req: Request) {
  const { content, email, project_id } = await req.json()
  const { data, error } = await supabase.from('feedback').insert({ content, email, project_id }).select().single()
  if (error) return new Response(JSON.stringify({ error }), { status: 500 })
  return new Response(JSON.stringify({ success: true, id: data.id }), { status: 200 })
}
