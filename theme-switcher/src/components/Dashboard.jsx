
export default function Dashboard({ Value }) {
  return (
    <main className="p-8">

      {/* Welcome section */}
      <section className="mb-8">
        <h2 className={`text-2xl font-bold ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>
          Welcome Back!
        </h2>

        <p className={`mt-2 ${Value ? "text-[#9CA3AF]" : "text-gray-500"}`}>
          Here's what's happening with your workspace today.
        </p>

        <button className="mt-5 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition">
          View Projects
        </button>
      </section>

      {/* Statistics */}
      <section className="mb-10">
        <h2 className={`text-lg font-bold mb-5 ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>
          Overview
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          <article className={`p-5 rounded-xl border shadow-sm ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <p className={`text-sm ${Value ? "text-[#9CA3AF]" : "text-gray-500"}`}>Total Projects</p>
            <h3 className={`text-3xl font-bold mt-3 ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>12</h3>
            <p className={`text-sm mt-2 ${Value ? "text-[#A78BFA]" : "text-purple-600"}`}>Active projects</p>
          </article>

          <article className={`p-5 rounded-xl border shadow-sm ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <p className={`text-sm ${Value ? "text-[#9CA3AF]" : "text-gray-500"}`}>Completed Tasks</p>
            <h3 className={`text-3xl font-bold mt-3 ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>28</h3>
            <p className="text-sm text-green-600 mt-2">Great progress</p>
          </article>

          <article className={`p-5 rounded-xl border shadow-sm ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <p className={`text-sm ${Value ? "text-[#9CA3AF]" : "text-gray-500"}`}>Pending Tasks</p>
            <h3 className={`text-3xl font-bold mt-3 ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>8</h3>
            <p className="text-sm text-orange-500 mt-2">Needs attention</p>
          </article>

          <article className={`p-5 rounded-xl border shadow-sm ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <p className={`text-sm ${Value ? "text-[#9CA3AF]" : "text-gray-500"}`}>Productivity</p>
            <h3 className={`text-3xl font-bold mt-3 ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>85%</h3>
            <p className={`text-sm mt-2 ${Value ? "text-[#A78BFA]" : "text-purple-600"}`}>This month</p>
          </article>

        </div>
      </section>

      {/* Recent Projects */}
      <section>
        <h2 className={`text-lg font-bold mb-5 ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <article className={`p-5 rounded-xl border ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <h3 className={`font-semibold ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>
              E-commerce Website
            </h3>
            <p className={`text-sm mt-2 ${Value ? "text-[#9CA3AF]" : "text-gray-500"}`}>
              Status: In Progress
            </p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-3/4 bg-purple-500 rounded-full"></div>
            </div>
          </article>

          <article className={`p-5 rounded-xl border ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <h3 className={`font-semibold ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>
              Portfolio Design
            </h3>
            <p className="text-sm text-green-600 mt-2">Status: Completed</p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-full bg-green-500 rounded-full"></div>
            </div>
          </article>

          <article className={`p-5 rounded-xl border ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <h3 className={`font-semibold ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>
              Weather Application
            </h3>
            <p className={`text-sm mt-2 ${Value ? "text-[#9CA3AF]" : "text-gray-500"}`}>
              Status: In Progress
            </p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-1/2 bg-purple-500 rounded-full"></div>
            </div>
          </article>

          <article className={`p-5 rounded-xl border ${Value ? "bg-[#1F2937] border-[#374151]" : "bg-white border-gray-200"}`}>
            <h3 className={`font-semibold ${Value ? "text-[#F9FAFB]" : "text-gray-800"}`}>
              Task Management App
            </h3>
            <p className="text-sm text-orange-500 mt-2">Status: Pending</p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-1/4 bg-orange-400 rounded-full"></div>
            </div>
          </article>

        </div>
      </section>

    </main>
  );
}
