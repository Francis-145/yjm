import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { songs } from "../data/songs";

const SongLyrics = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const song = songs.find((s) => s.id === parseInt(id));

  if (!song) {
    return (
      <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#050d24] via-[#0b1b3f] to-[#0f234f]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Song not found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#1b2f66] text-white rounded-lg hover:bg-[#233b80] transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen 
      bg-gradient-to-br from-[#050d24] via-[#0b1b3f] to-[#0f234f]
      flex flex-col items-center py-6">
      <div className="w-full max-w-3xl px-4 sm:px-6">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-3 px-5 py-2 
          bg-gradient-to-r from-[#0d1e3a] to-[#12315f]
          text-white font-semibold rounded-full shadow-lg 
          hover:scale-105 hover:shadow-xl transition-transform"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={2}
              stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          Back
        </button>

        {/* CARD */}
        <div className="bg-[#e9edf6] border border-[#c5cee0] rounded-2xl shadow-xl p-5 sm:p-8">

          {/* HEADER */}
          <div className="text-center mb-6">
            <div className="inline-block px-6 py-3 rounded-xl shadow-md 
              bg-gradient-to-r from-[#0c1a35] via-[#132a5a] to-[#0c1f42]">
              <h1 className="text-white text-xl sm:text-3xl font-extrabold telugu-text drop-shadow">
                {song.number}. {song.teluguTitle}
              </h1>
            </div>
          </div>

          {/* PALLAVI – NAVY THEME */}
          <div className="rounded-xl mb-6 overflow-hidden">
            <div
              className="px-5 py-4"
              style={{
                background: "linear-gradient(135deg, #081120 0%, #10264d 60%)",
                boxShadow:
                  "0 8px 20px rgba(8,17,32,0.3), inset 0 -6px 20px rgba(0,0,0,0.15)",
                borderRadius: 12,
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3">
                పల్లవి
              </h3>

              <p
                className="telugu-text text-base sm:text-lg leading-relaxed text-white whitespace-pre-line text-left"
                style={{ paddingLeft: 28, paddingRight: 24, lineHeight: 1.25 }}
              >
                {song.lyrics.pallavi.trim()}
              </p>
            </div>
          </div>

          {/* CHARANAMS — DARK PINK / ROSE THEME (WHITE TEXT) */}
          <div className="space-y-5">
            {[song.lyrics.charanam1, song.lyrics.charanam2].map((charanam, index) => (
              <div
                key={index}
                className="rounded-xl p-4 sm:p-6 relative overflow-hidden transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #3a0f28 0%, #6a1b45 85%)",
                  border: "1px solid rgba(110,30,70,0.45)",
                  boxShadow: "-12px 0 25px -10px rgba(70,0,40,0.55)",
                }}
              >
                {/* Number centered */}
                <h3 className="text-xl font-bold mb-3 text-center text-white">
                  {index + 1}.
                </h3>

                {/* Text left + padding + WHITE */}
                <p
                  className="telugu-text text-sm sm:text-base leading-relaxed whitespace-pre-line text-left text-white"
                  style={{
                    paddingLeft: 28,
                    paddingRight: 16,
                    lineHeight: 1.35
                  }}
                >
                  {charanam.trim()}
                </p>

                {/* LEFT ACCENT STRIPE – BRIGHT ROSE / MAGENTA */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 6,
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                    background: "linear-gradient(180deg, #e91e63, #c2185b)",
                    boxShadow: "3px 0 12px rgba(220,40,110,0.55)",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SongLyrics;
