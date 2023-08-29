"use client";
import React from "react";

const MiniNavbar = () => {
  return (
    <>
      <div style={{ backgroundColor: "#03c04a" }} className="p-0.5">
        <div className="flex justify-center items-center space-x-1">
          <button className="flex items-center space-x-1 px-2 py-0.5 text-xs text-white hover:text-gray-700 border-r border-white">
            <svg
              className="h-3 w-3 text-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="10" y1="14" x2="21" y2="3" />
              <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
            </svg>
            NOUS CONTACTER
          </button>

          <button className="flex items-center space-x-1 px-2 py-0.5 text-xs text-white hover:text-gray-700 border-r border-white">
            <span>
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>{" "}
            FAQ CENTRE D'AIDE
          </button>

          <button className="flex items-center space-x-1 px-2 py-0.5 text-xs text-white hover:text-gray-700 border-r border-white">
            <span>
              <svg
                className="h-4 w-4 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </span>{" "}
            01.89.72.01.96
          </button>

          <button className="flex items-center space-x-1 px-2 py-0.5 text-xs text-white hover:text-gray-700 border-r border-white">
            <span>
              <svg
                className="h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            BOUTIQUES CBD.FR
          </button>

          <button className="flex items-center space-x-1 px-2 py-0.5 text-xs text-white hover:text-gray-700 border-r border-white">
            <span>
              <svg
                className="h-4 w-4 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            </span>{" "}
            OUVRIR UNE FRANCHISE CBD.FR
          </button>

          <button className="flex items-center space-x-1 px-2 py-0.5 text-xs text-white hover:text-gray-700">
            <span>
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </span>
            ACTUALITES BLOG DU CBD
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media screen and (max-width: 640px) {
          div[style="background-color: #03c04a"] {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default MiniNavbar;
