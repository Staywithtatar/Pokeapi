"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function StarshipList() {
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://swapi.dev/api/starships")
        const data = await response.json()
        setStarships(data.results)
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchStarships()
  }, [])
  
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold text-white mb-8'>Featured Starships</h2>
      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='text-white text-2xl animate-pulse'>Loading Starships...</div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {starships.map((starship) => {
            const id = starship.url.split('/').slice(-2)[0];
            return (
              <Link key={starship.name} href={`/starship/${id}`}>
                <div className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-yellow-300/30 hover:border-yellow-400/50 shadow-lg'>
                  
                  <h3 className='text-white text-xl font-semibold group-hover:text-yellow-200 transition-colors mb-2'>
                    {starship.name}
                  </h3>
                  <div className='space-y-2 text-white/80'>
                    <p>Model: {starship.model}</p>
                    <p>Class: {starship.starship_class}</p>
                    <p>Speed: {starship.max_atmosphering_speed}</p>
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

export default StarshipList