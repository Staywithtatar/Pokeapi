"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

function SearchResult() {
  const params = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchCharacters = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/?search=${params.characterName}`);
        if (!response.ok) throw new Error('Search failed');
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    searchCharacters();
  }, [params.characterName]);

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
      <div className='container mx-auto mt-10'>
        <h2 className='text-white text-3xl font-bold mb-8'>
          Search Results for "{params.characterName}"
        </h2>
        {loading ? (
          <div className='text-white text-xl animate-pulse'>Searching...</div>
        ) : searchResults.length === 0 ? (
          <div className='text-white text-xl'>No characters found</div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {searchResults.map((character) => {
              const id = character.url.split('/').slice(-2)[0];
              return (
                <Link key={character.name} href={`/character/${id}`}>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-yellow-300/30 hover:border-yellow-400/50 shadow-lg'>
                    <h3 className='text-white text-xl font-semibold mb-4'>{character.name}</h3>
                    <div className='space-y-2 text-white/80'>
                      <p>Birth Year: {character.birth_year}</p>
                      <p>Gender: {character.gender}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResult