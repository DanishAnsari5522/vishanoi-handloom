import React from "react";
export const Navbar = () => {
    return (
        <>
        <nav className="bg-yellow-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-lg font-semibold">VISHNOI HANDLOOM</a>
          <button className="lg:hidden ml-auto text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <ul className="flex flex-col lg:flex-row lg:ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link text-slate-100">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-slate-100">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-slate-100">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-slate-100">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </>
    );
};
