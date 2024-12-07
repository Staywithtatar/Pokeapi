"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter();
  const [searchType, setSearchType] = useState("character");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchType}/${searchQuery}`);
  }

  return (
    <header className='bg-gradient-to-b from-yellow-500 via-orange-600 to-red-700 h-[400px] flex justify-center items-center relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent'/>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50'/>
      <div className='relative text-center px-4 max-w-2xl w-full'>
        <h1 className='text-white text-6xl font-bold mb-4 drop-shadow-lg'>
          Star Wars Universe
        </h1>
        <p className='text-yellow-100 text-2xl mb-8 drop-shadow-md'>
          Explore Characters, Planets, and Starships
        </p>
        <form onSubmit={handleSubmit} className='space-y-4 max-w-md mx-auto'>
          <div className='flex gap-2 justify-center'>
            <button
              type="button"
              onClick={() => setSearchType("character")}
              className={`px-4 py-2 rounded-lg ${
                searchType === "character"
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/20 text-white'
              } transition-colors`}
            >
              Characters
            </button>
            <button
              type="button"
              onClick={() => setSearchType("planet")}
              className={`px-4 py-2 rounded-lg ${
                searchType === "planet"
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/20 text-white'
              } transition-colors`}
            >
              Planets
            </button>
            <button
              type="button"
              onClick={() => setSearchType("starship")}
              className={`px-4 py-2 rounded-lg ${
                searchType === "starship"
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/20 text-white'
              } transition-colors`}
            >
              Starships
            </button>
          </div>
          <div className='flex gap-3'>
            <input
              type="text"
              className='w-full rounded-lg px-4 py-3 text-gray-700 bg-white/90 backdrop-blur-sm border-2 border-yellow-200/30 shadow-lg focus:outline-none focus:border-yellow-300/50 transition-all'
              placeholder={`Search for ${searchType}s...`}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className='px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold shadow-lg hover:bg-yellow-400 transition-colors'
              type='submit'
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header