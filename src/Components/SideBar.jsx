import { NavLink } from "react-router-dom";

const Sidebar = ({ navLinks }) => {
  return (
    <aside className="hidden md:flex w-64 bg-gray-900 text-white p-4">
      <nav className="w-full flex flex-col gap-4">
        {navLinks.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              `p-3 cursor-pointer rounded-lg hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
