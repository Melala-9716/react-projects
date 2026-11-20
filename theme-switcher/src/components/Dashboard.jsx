export default function Dashboard() {
  return (
    <main className="p-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome Back!
        </h2>

        <p className="text-gray-500 mt-2">
          Here's what's happening with your workspace today.
        </p>

        <button className="mt-5 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition">
          View Projects
        </button>
      </section>

    
      <section className="mb-10">

        <h2 className="text-lg font-bold text-gray-800 mb-5">
          Overview
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          <article className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Total Projects</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-3">12</h3>
            <p className="text-sm text-purple-600 mt-2">Active projects</p>
          </article>

          <article className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Completed Tasks</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-3">28</h3>
            <p className="text-sm text-green-600 mt-2">Great progress</p>
          </article>

          <article className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Pending Tasks</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-3">8</h3>
            <p className="text-sm text-orange-500 mt-2">Needs attention</p>
          </article>

          <article className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Productivity</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-3">85%</h3>
            <p className="text-sm text-purple-600 mt-2">This month</p>
          </article>

        </div>
      </section>

      {/* Recent Projects */}
      <section>

        <h2 className="text-lg font-bold text-gray-800 mb-5">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <article className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-800">
              E-commerce Website
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Status: In Progress
            </p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-3/4 bg-purple-500 rounded-full"></div>
            </div>
          </article>

          <article className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-800">
              Portfolio Design
            </h3>
            <p className="text-sm text-green-600 mt-2">
              Status: Completed
            </p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-full bg-green-500 rounded-full"></div>
            </div>
          </article>

          <article className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-800">
              Weather Application
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Status: In Progress
            </p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-1/2 bg-purple-500 rounded-full"></div>
            </div>
          </article>

          <article className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-800">
              Task Management App
            </h3>
            <p className="text-sm text-orange-500 mt-2">
              Status: Pending
            </p>
            <div className="h-2 bg-gray-100 rounded-full mt-4">
              <div className="h-2 w-1/4 bg-orange-400 rounded-full"></div>
            </div>
          </article>

        </div>
      </section>

    </main>
  );
}