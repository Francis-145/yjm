import React, { useState } from "react";
import { songs } from "../data/songs";
import { useNavigate } from "react-router-dom";
import logo from '../yjm-logo.png'
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const rawQuery = searchQuery.trim();
  const q = rawQuery.toLowerCase();

  const filteredSongs = songs.filter((song) => {
    if (song.number.toString().includes(q)) return true;
    if (song.title && song.title.toLowerCase().includes(q)) return true;
    if (rawQuery && song.teluguTitle && song.teluguTitle.includes(rawQuery))
      return true;
    return false;
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* 🌌 Header Section */}
      <div className="relative w-full bg-gradient-to-r from-indigo-950 via-purple-900 to-indigo-800 pb-20 shadow-2xl rounded-b-[4rem] flex flex-col items-center justify-center z-10">
        {/* Logo + Title */}
        <div className="flex items-center space-x-5 mt-8 mb-6">
          <img
            src={logo}
            alt="YJM Logo"
            className="w-24 h-24 rounded-full border-4 border-white shadow-2xl object-cover"
          />
          <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] tracking-wide">
            YJM Songs
          </h1>
        </div>

        {/* Sleek Search Bar */}
        <div className="w-full max-w-sm px-4">
          <div className="bg-white/90 backdrop-blur-md rounded-full flex items-center px-3 py-1.5 shadow-lg border border-gray-200 focus-within:ring-2 focus-within:ring-pink-400 transition-all">
            <input
              type="text"
              placeholder="Search song number or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-base text-gray-700 placeholder-gray-400 focus:outline-none py-2 px-4 rounded-full"
            />
            <button className="ml-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform">
              🔍
            </button>
          </div>
        </div>

        {/* Decorative Bottom Curve — merged gradient to avoid white gap */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[100px]"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
            </defs>
            <path
              fill="url(#curveGradient)"
              d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,128C840,117,960,107,1080,96C1200,85,1320,75,1380,69.3L1440,64V150H1380C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150H0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* 🎶 Song List */}
      <div className="w-full max-w-3xl px-6 pb-10 -mt-10 z-20">
        <div className="grid gap-4">
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              className="flex items-center justify-between bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all rounded-2xl shadow-lg px-4 py-3 cursor-pointer border border-purple-200 hover:scale-[1.02]"
              onClick={() => navigate(`/song/${song.id}`)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-700 text-white font-bold rounded-lg shadow-sm">
                  {song.number}
                </div>
                <h2 className="text-lg font-semibold text-gray-800 telugu-text">
                  {song.teluguTitle}
                </h2>
              </div>
            </div>
          ))}

          {filteredSongs.length === 0 && (
            <div className="text-center py-10 text-gray-500 text-lg">
              No songs found 😔
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
