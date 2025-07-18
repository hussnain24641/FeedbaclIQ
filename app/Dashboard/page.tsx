'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type FeedbackItem = {
  id: number
  content: string
  category: string
  urgency: string
  sentiment: string
}

export default function Dashboard() {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data, error } = await supabase.from('feedback').select('*')

      if (error) {
        setError(error.message)
      } else {
        setFeedback(data || [])
      }
      setLoading(false)
    }

    fetchFeedback()
  }, [])

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Feedback Dashboard</h1>
      {loading && <p className="text-gray-500">Loading feedback...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {feedback.length === 0 && !loading && !error && (
        <p className="text-gray-500">No feedback yet.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {feedback.map((f) => (
          <div key={f.id} className="border rounded-xl p-4 bg-gray-50 shadow-sm">
            <p className="text-gray-800 font-medium">{f.content}</p>
            <p className="text-sm text-gray-500">
              Category: {f.category} | Urgency: {f.urgency} | Sentiment: {f.sentiment}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
