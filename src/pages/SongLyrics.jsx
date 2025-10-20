import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { songs } from '../data/songs';

const SongLyrics = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const song = songs.find(s => s.id === parseInt(id));

  if (!song) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Song not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-lg mb-4 shadow-md">
              <span className="font-bold text-lg">Song #{song.number}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 telugu-text">
              {song.teluguTitle}
            </h1>
            <p className="text-xl text-gray-600">{song.title}</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                పల్లవి (Pallavi)
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line telugu-text">
                {song.lyrics.pallavi}
              </p>
            </div>

            <div className="border-t-2 border-purple-100 pt-6">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                చరణం 1 (Charanam 1)
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line telugu-text">
                {song.lyrics.charanam1}
              </p>
            </div>

            <div className="border-t-2 border-purple-100 pt-6">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                చరణం 2 (Charanam 2)
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line telugu-text">
                {song.lyrics.charanam2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongLyrics;