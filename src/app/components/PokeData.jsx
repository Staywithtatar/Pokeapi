"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function PokeData() {
  const [poke, setPoke] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const pokeData = await response.json()
        setPoke(pokeData.results)
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPokeData()
  }, [])
  
  return (
    <div className='container mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-purple-900 to-orange-300'>
      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='text-white text-2xl animate-pulse'>Loading Pokemon...</div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {poke.map((val, index) => (
            <Link key={val.name} href={'/pokeinfo/[id]'} as={`/pokeinfo/${index + 1}`}>
              <div className='group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-orange-300/30 hover:border-orange-400/50 shadow-lg hover:shadow-orange-500/20'>
                <div className='flex flex-col items-center'>
                  <h3 className='text-white capitalize font-semibold text-lg mb-3 group-hover:text-orange-200 transition-colors'>
                    {val.name}
                  </h3>
                  <div className='relative transform group-hover:scale-110 transition-transform duration-300'>
                    <div className='absolute -inset-1 bg-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all'></div>
                    <Image 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} 
                      width={150} 
                      height={150} 
                      alt={val.name}
                      className='relative z-10'
                      priority={index < 5}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default PokeData