import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { setActiveItem } from "../slices/activeItemSlice";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "tailwindcss";
const SidebarContext = createContext()

export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true)

  return (
  <aside className={`h-screen fixed top-0 left-0 transition-all w-20`}>
  <nav className="h-full flex flex-col bg-white shadow-sm">
    <div className="p-4 pb-2 flex justify-between items-center mb-7">
      <img
        src="./images/Group 59.jpg"
        className={`transition-all w-8.5 min-w-8.5 h-auto object-cover "w-8.5"`}
        alt=""
      />
    </div>

      <ul className="flex-1 px-3">{children}</ul>

    <div className="border-t flex p-3">
      <img
        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
        alt=""
        className="w-10 h-10 rounded-md"
      />
      <div className={`flex justify-between items-center overflow-hidden transition-all w-0>`}>
        <div className="leading-4">
          <h4 className="font-semibold">John Doe</h4>
          <span className="text-xs text-gray-600">johndoe@gmail.com</span>
        </div>
        <MoreVertical size={20} />
      </div>
    </div>
  </nav>
</aside>

  )
}

export function SidebarItem({ icon, text, active, alert }) {
    const activeItem = useSelector((state) => state.activeItem.activeItem);
    const dispatch = useDispatch();
//   const { expanded } = useContext(SidebarContext)

  return (
    <Link to={`/${text}`}>
    <li
    onClick={() => dispatch(setActiveItem(text))}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          activeItem === text
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}

    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            "top-2"
          }`}
        />
      )}

      { (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
    </Link>
  )
}