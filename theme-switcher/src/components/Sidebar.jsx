export default function Sidebar() {
  return (
    <aside className="row-span-3 bg-white border-r border-gray-200 p-6 min-h-screen">

      <h2 className="text-xl font-bold text-purple-700 mb-10">
        FocusSpace
      </h2>

      <p className="text-xs font-semibold text-gray-400 uppercase mb-4">
        Workspace
      </p>

      <ul className="flex flex-col gap-3">

        <li className="bg-purple-100 text-purple-700 rounded-lg p-3 font-semibold">
          Dashboard
        </li>

        <li className="text-gray-500 hover:bg-gray-100 rounded-lg p-3 cursor-pointer">
          My Tasks
        </li>

        <li className="text-gray-500 hover:bg-gray-100 rounded-lg p-3 cursor-pointer">
          Completed Tasks
        </li>

        <li className="text-gray-500 hover:bg-gray-100 rounded-lg p-3 cursor-pointer">
          Calendar
        </li>

        <li className="text-gray-500 hover:bg-gray-100 rounded-lg p-3 cursor-pointer">
          Messages
        </li>

        <li className="text-gray-500 hover:bg-gray-100 rounded-lg p-3 cursor-pointer">
          Settings
        </li>

      </ul>

      <div className="mt-16 bg-purple-50 rounded-xl p-4">
        <h3 className="font-semibold text-purple-800">
          Stay productive!
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Small steps lead to big achievements.
        </p>
      </div>

    </aside>
  );
}