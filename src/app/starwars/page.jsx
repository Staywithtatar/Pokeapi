import React from 'react'
import Header from '../components/Header'
import CharacterList from '../components/CharacterList'
import PlanetList from '../components/PlanetList'
import StarshipList from '../components/StarshipList'
import Link from 'next/link'

function page() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-red-900 to-yellow-700'>
      <Header />
      <div className='container mx-auto px-4 py-6'>
          <Link 
            href="/" 
            className='inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors shadow-lg'
          >
            กลับหน้าหลัก
          </Link>
        </div>
      <div className='space-y-12 py-12'>
        <CharacterList />
        <StarshipList />
        <PlanetList />
      </div>
    </main>
  )
}

export default page