"use client";
import React from "react";
import Image from "next/image";

const MainNavbar = () => {
  return (
    <div className="bg-white p-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Search Bar on the Left */}
        <div className="flex items-center border rounded-full px-3 py-1 w-1/4">
          {" "}
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none focus:outline-none rounded-full mr-2"
          />
          <svg
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4C7.23858 4 5 6.23858 5 9C5 11.7614 7.23858 14 10 14C12.7614 14 15 11.7614 15 9C15 6.23858 12.7614 4 10 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Logo in the Middle */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/images/logo.svg" height={144} width={144} alt="logo" />
        </div>

        {/* Two Icons on the Right */}
        <div className="flex space-x-4">
          <button>
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <button>
            <svg
              className="h-6 w-6 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
