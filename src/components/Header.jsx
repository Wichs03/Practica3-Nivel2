import React from "react";
import logo from "../assets/logo.svg";
import iso from "../assets/iso.svg";

export default function Header() {
  return (
    <div>
      <nav className="flex flex-row justify-between px-10 py-4 items-center">
        <div className="flex flex-row gap-20">
          <div className="icons flex flex-row gap-2">
            <img src={iso} alt="isotipo" className="size-6" />
            <img src={logo} alt="logotipo" />
          </div>
          <menu className="flex flex-row gap-8">
            <li>
              <a href="">Home</a>
              <button></button>
            </li>
            <li>
              <a href="">Service</a>
              <button></button>
            </li>
            <li>
              <a href="">Works</a>
              <button></button>
            </li>
            <li>
              <a href="">News</a>
              <button></button>
            </li>
            <li>
              <a href="">Contact</a>
              <button></button>
            </li>
          </menu>
        </div>
        <div className="log flex flex-row gap-4">
          <button className="hover: cursor-pointer hover:scale-105 transition text-[#4E92F9] font-semibold">
            Log In
          </button>
          <button className="hover:cursor-pointer hover:scale-105 transition text-[#4E92F9] rounded-2xl bg-white shadow-xl py-2 px-3 font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
