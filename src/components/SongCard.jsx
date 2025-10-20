import React from 'react';
import { useNavigate } from 'react-router-dom';

const SongCard = ({ song }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/song/${song.id}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-6 border-2 border-transparent hover:border-purple-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
          {song.number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {song.title}
          </h3>
          <p className="text-gray-600 text-lg telugu-text">
            {song.teluguTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;