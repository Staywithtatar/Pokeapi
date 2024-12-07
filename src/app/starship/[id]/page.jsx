"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function StarshipInfo() {
  const params = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/starships/${params.id}`);
        if (!response.ok) throw new Error('Starship not found');
        const data = await response.json();
        setStarship(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarshipDetails();
  }, [params.id]);

  if (error) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-red-900 to-yellow-700 p-8'>
        <Link href="/starwars" className='inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors shadow-lg'>
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
    <div className='min-h-screen bg-gradient-to-b from-red-900 to-yellow-700 p-8'>
      <Link href="/starwars" className='inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors shadow-lg'>
        Go Back
      </Link>
      <div className='flex justify-center items-center mt-10'>
        <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-300/30 shadow-xl max-w-4xl w-full'>
          {loading ? (
            <div className='text-white text-xl animate-pulse'>Loading...</div>
          ) : starship && (
            <div className='grid md:grid-cols-2 gap-8'>
             
              <div className='space-y-6 text-white'>
                <h3 className='text-4xl font-bold mb-6 drop-shadow-lg'>
                  {starship.name}
                </h3>
                <div className='grid grid-cols-2 gap-6'>
                  <div>
                    <span className='text-yellow-200 block mb-2 text-xl'>Specifications</span>
                    <div className='space-y-2'>
                      <p>Model: {starship.model}</p>
                      <p>Class: {starship.starship_class}</p>
                      <p>Manufacturer: {starship.manufacturer}</p>
                      <p>Cost: {starship.cost_in_credits} credits</p>
                      <p>Length: {starship.length}m</p>
                    </div>
                  </div>
                  <div>
                    <span className='text-yellow-200 block mb-2 text-xl'>Performance</span>
                    <div className='space-y-2'>
                      <p>Speed: {starship.max_atmosphering_speed}</p>
                      <p>Hyperdrive: {starship.hyperdrive_rating}</p>
                      <p>Crew: {starship.crew}</p>
                      <p>Passengers: {starship.passengers}</p>
                      <p>Cargo: {starship.cargo_capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StarshipInfo