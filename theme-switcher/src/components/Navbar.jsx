export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 lg:px-8 py-5 lg:flex lg:justify-between lg:items-center grid grid-cols-2 grid-rows-2 h-[150px] px-[20px] gap-[10px] ">

      <div className="grid grid-rows-2 gap-[40px]" >
        <h1 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-400">
          Welcome to your workspace
        </p>
      </div>

      <div className="lg:flex lg:items-center lg:gap-5 grid grid-rows-2 gap-[40px]">

        <button className="h-[40px] bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition">
          Dark Mode
        </button>

        <div className="mx-[40px] w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-bold">
          M
        </div>

      </div>

    </nav>
  );
}