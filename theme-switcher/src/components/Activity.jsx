export default function Activity() {
  return (
    <section className="mx-8 mb-8 bg-white border border-gray-200 rounded-xl p-6">

      <h2 className="text-lg font-bold text-gray-800 mb-5">
        Recent Activities
      </h2>

      <ul className="flex flex-col gap-4 text-sm text-gray-600">

        <li className="border-b border-gray-100 pb-3">
          <p>You completed Portfolio Design.</p>
          <span className="text-xs text-gray-400">Today</span>
        </li>

        <li className="border-b border-gray-100 pb-3">
          <p>You created a new project.</p>
          <span className="text-xs text-gray-400">Yesterday</span>
        </li>

        <li className="border-b border-gray-100 pb-3">
          <p>You updated your profile.</p>
          <span className="text-xs text-gray-400">2 days ago</span>
        </li>

        <li>
          <p>You added three new tasks.</p>
          <span className="text-xs text-gray-400">3 days ago</span>
        </li>

      </ul>

    </section>
  );
}