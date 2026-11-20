
export default function Activity({ Value }) {
  return (
    <section className={`mx-8 mb-8 border rounded-xl p-6 ${
      Value
        ? "bg-[#1F2937] border-[#374151]"
        : "bg-white border-gray-200"
    }`}>

      <h2 className={`text-lg font-bold mb-5 ${
        Value ? "text-[#F9FAFB]" : "text-gray-800"
      }`}>
        Recent Activities
      </h2>

      <ul className={`flex flex-col gap-4 text-sm ${
        Value ? "text-[#D1D5DB]" : "text-gray-600"
      }`}>

        <li className={`border-b pb-3 ${
          Value ? "border-[#374151]" : "border-gray-100"
        }`}>
          <p>You completed Portfolio Design.</p>
          <span className="text-xs text-gray-400">Today</span>
        </li>

        <li className={`border-b pb-3 ${
          Value ? "border-[#374151]" : "border-gray-100"
        }`}>
          <p>You created a new project.</p>
          <span className="text-xs text-gray-400">Yesterday</span>
        </li>

        <li className={`border-b pb-3 ${
          Value ? "border-[#374151]" : "border-gray-100"
        }`}>
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
