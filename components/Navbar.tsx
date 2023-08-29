"use client";
import React from "react";

// TODO: MAKE IT TRANSFORM TO DROPDOWN BUTTON WHEN NAVBAR TOO BIG FOR THE SCREEN

const Navbar = () => {
  return (
    <div className="bg-white p-0.5 md:p-1 lg:p-2 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Button 1 */}
        <div className="relative flex-1 text-center group">
          <button className="flex items-center justify-center text-gray-800 hover:text-gray-600 w-48 h-12 relative">
            <svg
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Button 1
          </button>
          <div className="dropdown-content absolute w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 1
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 2
              </button>
            </div>
          </div>
        </div>
        {/* Button 2 */}
        <div className="relative flex-1 text-center group">
          <button className="flex items-center justify-center text-gray-800 hover:text-gray-600 w-48 h-12 relative">
            <svg
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Button 2
          </button>
          <div className="dropdown-content absolute w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 1
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 2
              </button>
            </div>
          </div>
        </div>
        {/* Button 3*/}
        <div className="relative flex-1 text-center group">
          <button className="flex items-center justify-center text-gray-800 hover:text-gray-600 w-48 h-12 relative">
            <svg
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Button 3
          </button>
          <div className="dropdown-content absolute w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 1
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 2
              </button>
            </div>
          </div>
        </div>
        {/* Button 4 */}
        <div className="relative flex-1 text-center group">
          <button className="flex items-center justify-center text-gray-800 hover:text-gray-600 w-48 h-12 relative">
            <svg
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Button 4
          </button>
          <div className="dropdown-content absolute w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 1
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sub-Button 2
              </button>
            </div>
          </div>
        </div>

        {/* end of buttons ... */}
      </div>
    </div>
  );
};
export default Navbar;
