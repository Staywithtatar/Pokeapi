"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function RickHeader() {
  const router = useRouter();
  const [characterName, setCharacterName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/ricksearch/${characterName}`);
  }

  return (
    <header className='bg-gradient-to-b from-green-500 via-teal-600 to-blue-700 h-[400px] flex justify-center items-center relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent'/>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-50'/>
      <div className='relative text-center px-4 max-w-2xl w-full'>
        <h1 className='text-white text-6xl font-bold mb-4 drop-shadow-lg'>
          Rick and Morty
        </h1>
        <p className='text-green-100 text-2xl mb-8 drop-shadow-md'>
          ค้นหาตัวละครจากซีรีส์
        </p>
        <form onSubmit={handleSubmit} className='flex gap-3 max-w-md mx-auto'>
          <input
            type="text"
            className='w-full rounded-lg px-4 py-3 text-gray-700 bg-white/90 backdrop-blur-sm border-2 border-green-200/30 shadow-lg focus:outline-none focus:border-green-300/50 transition-all'
            placeholder='ใส่ชื่อตัวละคร'
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button 
            className='px-6 py-3 rounded-lg bg-green-500 text-white font-semibold shadow-lg hover:bg-green-400 transition-colors'
            type='submit'
          >
            ค้นหา
          </button>
        </form>
      </div>
    </header>
  )
}

export default RickHeader