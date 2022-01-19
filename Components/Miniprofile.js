import React from "react";

export default function Miniprofile() {
  return (
    <div className="mt-10 ml-7 flex items-center justify-between">
      <img
        src={"/images/avatar.jpeg"}
        className="h-14 border p-[2px] rounded-full object-contain  hover:scale-110 transition transform duration-200 ease-out"
      ></img>
      <p className="flex-1 pl-2 mr-5">
        <span className="font-semibold">syedmsohaib</span>
        <p className="text-gray-500 text-sm">Syed Muhammad Sohaib</p>
      </p>
      <button type="button" className="font-semibold text-blue-400">
        Sign Out
      </button>
    </div>
  );
}
