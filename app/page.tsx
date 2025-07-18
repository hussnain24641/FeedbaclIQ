export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c2237] via-[#2c2f4a] to-[#1c2237] text-beige">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Turn Feedback Into <br /> Actionable Insights
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Stop drowning in feedback. Let AI tell you exactly what your users need next.
          </p>
          <a href="/Dashboard">
            <button className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
              🚀 Start Free Trial
            </button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "📥 Collect Feedback",
              desc: "Use forms, widgets, or emails to gather customer insights effortlessly."
            },
            {
              title: "🤖 AI Analysis",
              desc: "Automatically cluster, prioritize, and summarize what users want."
            },
            {
              title: "🚧 Build Smarter",
              desc: "Know what features to build next, backed by real user pain points."
            }
          ].map((item, index) => (
            <div key={index} className="bg-[#272c40] rounded-2xl p-6 shadow-xl text-center hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
