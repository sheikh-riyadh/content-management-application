import React, { useState } from 'react';
import {
    FaBars,
    FaHome,
    FaUserAlt,
    FaRegChartBar,
    FaBookOpen
} from "react-icons/fa"
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItems = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/create-post",
            name: "Create Post",
            icon: <FaRegChartBar />
        },
        {
            path: "/recent-view",
            name: "Recent View",
            icon: <FaBookOpen />
        },
    ]
    return (
        <div className='flex'>
            <div className="sidebar min-h-screen text-white bg-black w-[300px] transition-all" style={{ width: isOpen ? "300px" : "50px" }}>
                <div className="top-section flex items-center justify-between py-5 px-4">
                    <h1 className="logo text-3xl" style={{ display: isOpen ? "block" : "none" }}>Logo</h1>
                    <div className="bars flex ml-8 text-2xl cursor-pointer" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItems.map((item) => (
                    <NavLink to={item.path} key={item.name} className="link flex py-3 px-4 gap-5 items-center transition-all hover:bg-sky-400 hover:text-black font-bold lg:text-xl active:bg-sky-400">
                        <div className="icon">{item.icon}</div>
                        <div className="link-text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main className='w-full p-5'>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;