import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const menuItems = ["Dashboard", "About Us"];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:block w-64 bg-gray-900 text-white p-4">
        <nav>
          {menuItems.map((item) => (
            <div
              key={item}
              className={`p-3 cursor-pointer rounded-lg hover:bg-gray-700 ${selectedTab === item ? "bg-gray-700" : ""}`}
              onClick={() => setSelectedTab(item)}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setOpen(false)}></div>
      )}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white p-4 shadow-lg transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform md:hidden z-50`}> 
        <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
          <X className="h-6 w-6" />
        </button>
        <nav className="mt-10">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`p-3 cursor-pointer rounded-lg hover:bg-gray-300 ${selectedTab === item ? "bg-gray-300" : ""}`}
              onClick={() => {
                setSelectedTab(item);
                setOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto w-full">
        <div className="flex items-center gap-4">
          <button className="md:hidden top-4 left-4 p-2 bg-gray-800 text-white rounded" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold">{selectedTab}</h1>
        </div>
        {selectedTab === "Dashboard" ? (
          <Dashboard />
        ) : (
          <p>About Us Content</p>
        )}
      </main>
    </div>
  );
};

export default App;
