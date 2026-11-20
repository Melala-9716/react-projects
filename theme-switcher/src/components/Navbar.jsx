
export default function Navbar({ Value, SecondValue }) {
  return (
    <nav className={`border-b lg:px-8 py-5 lg:flex lg:justify-between lg:items-center grid grid-cols-2 grid-rows-2 h-[150px] px-[20px] gap-[10px] ${
      Value
        ? "bg-[#1F2937] border-[#374151]"
        : "bg-white border-gray-200"
    }`}>

      <div className="grid grid-rows-2 gap-[40px]">
        <h1 className={`text-lg font-semibold ${
          Value ? "text-[#F9FAFB]" : "text-gray-800"
        }`}>
          Dashboard
        </h1>

        <p className={`text-sm ${
          Value ? "text-[#9CA3AF]" : "text-gray-400"
        }`}>
          Welcome to your workspace
        </p>
      </div>

      <div className="lg:flex lg:items-center lg:gap-5 grid grid-rows-2 gap-[40px]">

        <button
          onClick={SecondValue}
          className={`h-[40px] px-4 py-2 rounded-lg transition ${
            Value
              ? "bg-purple-900/40 text-[#C4B5FD] hover:bg-purple-900/60"
              : "bg-purple-100 text-purple-700 hover:bg-purple-200"
          }`}
        >
          {Value ? "Light Mode" : "Dark Mode"}
        </button>

        <div className={`mx-[40px] w-10 h-10 rounded-full flex items-center justify-center font-bold ${
          Value
            ? "bg-purple-900/50 text-[#C4B5FD]"
            : "bg-purple-200 text-purple-800"
        }`}>
          M
        </div>

      </div>

    </nav>
  );
}
