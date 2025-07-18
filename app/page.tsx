export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-sky-100 to-white p-10">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">FeedbackIQ</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl text-center">
        Unlock customer insights with AI-powered feedback analysis. Build better products.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition">
        Start Free Trial
      </button>
    </div>
  )
}