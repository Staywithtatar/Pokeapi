"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function PlanetList() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://swapi.dev/api/planets")
        const data = await response.json()
        setPlanets(data.results)
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPlanets()
  }, [])
  
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold text-white mb-8'>Known Planets</h2>
      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='text-white text-2xl animate-pulse'>Loading Planets...</div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {planets.map((planet) => {
            const id = planet.url.split('/').slice(-2)[0];
            return (
              <Link key={planet.name} href={`/planet/${id}`}>
                <div className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-yellow-300/30 hover:border-yellow-400/50 shadow-lg'>
                  
                  <h3 className='text-white text-xl font-semibold group-hover:text-yellow-200 transition-colors mb-2'>
                    {planet.name}
                  </h3>
                  <div className='space-y-2 text-white/80'>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Population: {planet.population}</p>
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

export default PlanetList