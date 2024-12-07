"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://swapi.dev/api/people")
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
    <div className='container mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-red-900 to-yellow-700'>
      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='text-white text-2xl animate-pulse'>Loading Characters...</div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {characters.map((character, index) => {
            const id = character.url.split('/').slice(-2)[0];
            return (
              <Link key={character.name} href={`/character/${id}`}>
                <div className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-yellow-300/30 hover:border-yellow-400/50 shadow-lg hover:shadow-yellow-500/20'>
                  <div className='space-y-4'>
                    <h3 className='text-white text-xl font-semibold group-hover:text-yellow-200 transition-colors'>
                      {character.name}
                    </h3>
                    <div className='space-y-2 text-white/80'>
                      <p>Birth Year: {character.birth_year}</p>
                      <p>Gender: {character.gender}</p>
                    </div>
                    <div className='absolute bottom-4 right-4 w-8 h-8 bg-yellow-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all'></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default CharacterList