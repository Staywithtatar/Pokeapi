"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

function CharacterInfo() {
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/${params.id}`);
        if (!response.ok) throw new Error('Character not found');
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
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
        <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-300/30 shadow-xl max-w-2xl w-full'>
          {loading ? (
            <div className='text-white text-xl animate-pulse'>Loading...</div>
          ) : character && (
            <div className='space-y-6 text-white'>
              <h3 className='text-4xl text-white font-bold mb-6 drop-shadow-lg'>
                {character.name}
              </h3>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <span className='text-yellow-200 block mb-2 text-xl'>Physical Traits</span>
                  <div className='space-y-2'>
                    <p>Height: {character.height}cm</p>
                    <p>Mass: {character.mass}kg</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Eye Color: {character.eye_color}</p>
                  </div>
                </div>
                <div>
                  <span className='text-yellow-200 block mb-2 text-xl'>Details</span>
                  <div className='space-y-2'>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Skin Color: {character.skin_color}</p>
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

export default CharacterInfo