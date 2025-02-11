import { useState } from "react";
const Sidebar = ({ navLinks })=>
{
    const [selectedTab, setSelectedTab] = useState("Dashboard");
    return(
        <aside className="hidden md:flex w-64  bg-gray-900 text-white p-4">
        <nav className="w-full flex flex-col gap-4">
          {navLinks.map((item) => (
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
    )
}

export default Sidebar;