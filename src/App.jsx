import { useState } from "react";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";

function App() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-6">
      {/* Mobile Frame Container */}
      <div className="w-full sm:max-w-md min-h-screen sm:min-h-[85vh] bg-slate-50 sm:rounded-3xl shadow-xl flex flex-col overflow-hidden border border-slate-200">
        {/* Navbar */}
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {/* Mian Content Area */}
        <main className="flex-1 p-4 overflow-y-auto space-y-4">
          {/* Logo */}
          <img
            src="/pics/tct_logo.png"
            alt="Thai Helps Thai Plus logo"
            className="w-full h-auto object-contain rounded-2xl bg-white p-3 shadow-md border border-gray-200"
          />
          {currentTab === "home" ? <Index /> : <About />}
        </main>

        {/* Fotter */}
        <footer className="py-3 text-center text-xs text-gray-400 bg-white border-t border-gray-100">
          @2026 Thais Help Thais Plus Calculate Helper
        </footer>
      </div>
    </div>
  );
}

export default App;
