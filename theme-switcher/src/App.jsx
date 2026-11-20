import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Activity from "./components/Activity";
import { useState } from "react";

function App() {
  const[isDarkMode,SetIsDarkMode]=useState(false);
  function Toggle(){
    SetIsDarkMode(!isDarkMode);
  }
  return (
    <div className="min-h-screen bg-[#F5F6FA] grid grid-cols-[230px_minmax(0,1fr)] grid-rows-[auto_1fr_auto]">

      <Sidebar />
      <Navbar Value={isDarkMode} SecondValue={Toggle}/>
      <Dashboard />
      <Activity />

    </div>
  );
}

export default App;