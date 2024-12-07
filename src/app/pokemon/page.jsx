import React from 'react'
import PokeData from '../components/PokeData'
import PokeHeader from '../components/PokeHeader'
import Link from 'next/link'

function page() {
    return (
      <main className='min-h-screen bg-gradient-to-b from-purple-900 to-orange-300'>
        <PokeHeader />
        <div className='container mx-auto px-4 py-6'>
          <Link 
            href="/" 
            className='inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg'
          >
            กลับหน้าหลัก
          </Link>
        </div>
        <div className='space-y-12'>
          <PokeData />
        </div>
      </main>   
    )
  }

export default page