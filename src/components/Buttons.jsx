import React from "react";

export default function ButtonWhite({ children, className }) {
  return (
    <button
      className={` p-[2px] bg-gradient-to-r from-[#C381DB] to-[#4E92F9] rounded-2xl hover:cursor-pointer hover:scale-105 transition ${className}`}
    >
      <div className="bg-white rounded px-4 py-1 hover:bg-gray-50 transition">
        <span className="bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent font-semibold">
          {children}
        </span>
      </div>
    </button>
  );
}

export function ButtonColor({ children, className = "" }) {
  return (
    <button
      className={`rounded px-4 py-1 bg-gradient-to-r from-[#C381DB] to-[#4E92F9] text-white font-semibold hover:cursor-pointer hover:scale-105 transition ${className}`}
    >
      {children}
    </button>
  );
}
