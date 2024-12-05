"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function PokeInfo() {
  const params = useParams();
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchPokeDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
        if (!response.ok) throw new Error('Pokemon not found');
        const pokeData = await response.json();
        setPoke(pokeData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPokeDetails();
  }, [params.id]);

  if (error) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-purple-900 to-orange-300 p-8'>
        <Link href="/" className='inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg'>
          Go Back
        </Link>
        <div className='text-center mt-10'>
          <p className='text-white text-xl bg-red-500/20 backdrop-blur-sm rounded-lg p-4 inline-block'>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-900 to-orange-300 p-8'>
      <Link href="/" className='inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg'>
        Go Back
      </Link>
      <div className='flex justify-center items-center mt-10'>
        <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-orange-300/30 shadow-xl max-w-2xl w-full'>
          {loading ? (
            <div className='text-white text-xl animate-pulse'>Loading...</div>
          ) : poke && (
            <>
              <h3 className='text-4xl capitalize text-white font-bold mb-6 drop-shadow-lg'>
                {poke.name}
              </h3>
              {poke.sprites?.other?.home?.front_default && (
                <div className='relative mb-8 transform hover:scale-105 transition-transform duration-300'>
                  <div className='absolute -inset-1 bg-orange-500/20 rounded-full blur-2xl'></div>
                  <Image 
                    src={poke.sprites.other.home.front_default} 
                    width={300} 
                    height={300} 
                    alt={poke.name}
                    priority
                    className='relative z-10'
                  />
                </div>
              )}
              <div className='space-y-6 text-white'>
                <p className='text-xl'>
                  <span className='text-orange-200'>Weight:</span> {poke.weight}
                </p>
                <div>
                  <span className='text-orange-200 block mb-2 text-xl'>Abilities</span>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {poke.abilities?.map(val => (
                      <span 
                        key={val.ability.name} 
                        className='bg-orange-500/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-orange-300/30'
                      >
                        {val.ability.name}
                      </span>  
                    ))}
                  </div>
                </div>
                <div>
                  <span className='text-orange-200 block mb-2 text-xl'>Types</span>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {poke.types?.map(val => (
                      <span 
                        key={val.type.name} 
                        className='bg-purple-500/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-purple-300/30'
                      >
                        {val.type.name}
                      </span>  
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeInfo