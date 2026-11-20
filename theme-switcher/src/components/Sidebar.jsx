
export default function Sidebar({ Value }) {
  return (
    <aside className={`row-span-3 border-r p-6 min-h-screen ${
      Value
        ? "bg-[#1F2937] border-[#374151]"
        : "bg-white border-gray-200"
    }`}>

      <h2 className={`text-xl font-bold mb-10 ${
        Value ? "text-[#A78BFA]" : "text-purple-700"
      }`}>
        FocusSpace
      </h2>

      <p className="text-xs font-semibold text-gray-400 uppercase mb-4">
        Workspace
      </p>

      <ul className="flex flex-col gap-3">

        <li className={`rounded-lg p-3 font-semibold ${
          Value
            ? "bg-purple-900/40 text-[#C4B5FD]"
            : "bg-purple-100 text-purple-700"
        }`}>
          Dashboard
        </li>

        {["My Tasks", "Completed Tasks", "Calendar", "Messages", "Settings"].map((item) => (
          <li
            key={item}
            className={`rounded-lg p-3 cursor-pointer transition ${
              Value
                ? "text-[#9CA3AF] hover:bg-[#374151] hover:text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {item}
          </li>
        ))}

      </ul>

      <div className={`mt-16 rounded-xl p-4 ${
        Value ? "bg-purple-900/30" : "bg-purple-50"
      }`}>
        <h3 className={`font-semibold ${
          Value ? "text-[#C4B5FD]" : "text-purple-800"
        }`}>
          Stay productive!
        </h3>

        <p className={`text-sm mt-2 ${
          Value ? "text-[#9CA3AF]" : "text-gray-500"
        }`}>
          Small steps lead to big achievements.
        </p>
      </div>

    </aside>
  );
}
