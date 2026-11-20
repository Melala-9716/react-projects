import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Activity from "./components/Activity";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] grid grid-cols-[230px_minmax(0,1fr)] grid-rows-[auto_1fr_auto]">

      <Sidebar />
      <Navbar />
      <Dashboard />
      <Activity />

    </div>
  );
}

export default App;