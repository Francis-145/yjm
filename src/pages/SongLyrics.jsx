import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { songs } from "../data/songs";

const SongLyrics = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const song = songs.find((s) => s.id === parseInt(id));

  if (!song) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Song not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex flex-col items-center py-4">
      <div className="w-full max-w-3xl px-3 sm:px-6">
        <button
          onClick={() => navigate("/")}
          className="mb-5 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md"
        >
          ⬅️ Back 
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 overflow-y-auto">
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-lg mb-3 shadow-md">
              <span className="font-bold text-lg">Song #{song.number}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 telugu-text">
              {song.teluguTitle}
            </h1>
            <p className="text-lg text-gray-600">{song.title}</p>
          </div>

          {/* Pallavi Section */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 sm:p-6 mb-4 shadow-inner">
            <h3 className="text-xl font-semibold text-purple-700 mb-2 text-center">
              పల్లవి 
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-line text-center telugu-text">
              {song.lyrics.pallavi.trim()}
            </p>
          </div>

          {/* Charanams */}
          {[song.lyrics.charanam1, song.lyrics.charanam2].map(
            (charanam, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 sm:p-6 mb-4 shadow-inner"
              >
                <h3 className="text-xl font-semibold text-purple-700 mb-2 text-center">
                  {index + 1}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-line text-center telugu-text">
                  {charanam.trim()}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SongLyrics;
