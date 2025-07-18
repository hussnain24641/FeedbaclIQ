export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Turn Feedback Into Actionable Insights</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stop drowning in feedback. Get AI-powered analysis that tells you exactly what to build next.
          </p>
          <a href="/dashboard">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Start Free Trial
            </button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Collect Feedback</h3>
              <p className="text-gray-600">Simple widget for your website or forward emails</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">Automatically categorize and prioritize feedback</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Build Smart</h3>
              <p className="text-gray-600">Know exactly what to build next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}