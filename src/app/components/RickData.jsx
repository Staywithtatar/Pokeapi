"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function RickData() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setCharacters(data.results)
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCharacters()
  }, [])
  
  return (
    <div className='container mx-auto px-4 py-8'>
      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='text-white text-2xl animate-pulse'>กำลังโหลดข้อมูล...</div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {characters.map((character) => (
            <Link key={character.id} href={`/rickinfo/${character.id}`}>
              <div className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-green-300/30 hover:border-green-400/50 shadow-lg'>
                <div className='relative w-full aspect-square mb-4'>
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className='rounded-lg object-cover'
                    priority
                  />
                </div>
                <h3 className='text-white text-xl font-semibold group-hover:text-green-200 transition-colors mb-2'>
                  {character.name}
                </h3>
                <div className='space-y-2 text-white/80'>
                  <p>สถานะ: {character.status}</p>
                  <p>สายพันธุ์: {character.species}</p>
                  <p>ที่อยู่: {character.location.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default RickData