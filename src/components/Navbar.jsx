export default function Navbar({ currentTab, setCurrentTab }) {
  return (
    <header className="bg-slate-100 p-4 border-b border-slate-200">
      <nav className="flex bg-slate-200/80 p-1 rounded-xl w-full">
        <button
          type="button"
          onClick={() => setCurrentTab("home")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            currentTab === "home"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          หน้าหลัก
        </button>
        <button
          type="button"
          onClick={() => setCurrentTab("about")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            currentTab === "about"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:bg-gray-900"
          }`}
        >
          About
        </button>
      </nav>
    </header>
  );
}
