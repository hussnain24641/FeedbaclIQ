import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey:  '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',
})

export async function analyzeFeedback(content: string) {
  const prompt = `
  Analyze this feedback:
  "${content}"
  Return JSON with:
  - category: "bug", "feature", "praise", or "complaint"
  - urgency: 0–10
  - sentiment: -1 to 1
  - summary
  - suggested action
  `
  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.1,
    max_tokens: 300
  })

  try {
    return JSON.parse(res.choices[0].message.content || '{}')
  } catch {
    return {
      category: 'unknown',
      urgency: 5,
      sentiment: 0,
      summary: 'Unable to analyze',
      action: 'Review manually'
    }
  }
}
