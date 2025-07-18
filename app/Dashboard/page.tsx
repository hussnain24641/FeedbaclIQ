'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Feedback {
  id: number;
  message: string;
  created_at: string;
}

export default function DashboardPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching feedbacks:', error);
      } else {
        setFeedbacks(data || []);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Feedback Dashboard</h1>
      <div className="space-y-4">
        {feedbacks.length > 0 ? (
          feedbacks.map((fb) => (
            <div key={fb.id} className="p-4 bg-gray-100 rounded shadow">
              <p className="text-lg">{fb.message}</p>
              <p className="text-sm text-gray-500">{new Date(fb.created_at).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No feedback submitted yet.</p>
        )}
      </div>
    </div>
  );
}

