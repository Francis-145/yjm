import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import { songs } from '../data/songs';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSongs = songs.filter(song =>
    song.number.toString().includes(searchQuery) ||
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.teluguTitle.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Header />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="grid gap-4 md:grid-cols-2">
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>

        {filteredSongs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No songs found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;