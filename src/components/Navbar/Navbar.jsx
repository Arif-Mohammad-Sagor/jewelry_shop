import React, { useContext } from 'react';
import './navbar.moudle.css';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/alljewelry">All Jewelry</NavLink>
              </li>
              <li>
                <NavLink to="/myjewelry"> My Jewelry</NavLink>
              </li>
              <li>
                <NavLink to="/addjewelry">Add Jewelry</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
            </ul>
          </div>
          <img src={logo} />
          <a className="ms-4 normal-case md:text-xl  text-sm">
            Excellence & Art
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/alljewelry">All Jewelry</NavLink>
            </li>
            <li>
              <NavLink to="/myjewelry"> My Jewelry</NavLink>
            </li>
            <li>
              <NavLink to="/addjewelry">Add Jewelry</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <img src={logo} alt="profile pic" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar