"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter();
  const [pokeName, setPokeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokesearch/${pokeName}`);
  }

  return (
    <header className='bg-gradient-to-b from-orange-400 via-pink-500 to-purple-800 h-[400px] flex justify-center items-center relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-500/20 to-transparent'/>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full blur-3xl opacity-50'/>
      <div className='relative text-center px-4 max-w-2xl w-full'>
        <h1 className='text-white text-6xl font-bold mb-4 drop-shadow-lg'>
          Pokemon Search
        </h1>
        <p className='text-orange-100 text-2xl mb-8 drop-shadow-md'>
          Find your favorite Pokemon
        </p>
        <form onSubmit={handleSubmit} className='flex gap-3 max-w-md mx-auto'>
          <input
            type="text"
            className='w-full rounded-lg px-4 py-3 text-gray-700 bg-white/90 backdrop-blur-sm border-2 border-orange-200/30 shadow-lg focus:outline-none focus:border-orange-300/50 transition-all'
            placeholder='Enter Pokemon name'
            onChange={(e) => setPokeName(e.target.value)}
          />
          <button 
            className='px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-colors'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header