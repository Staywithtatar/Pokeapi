// app/rick/page.jsx
"use client"

import RickHeader from '../components/RickHeader'
import RickData from '../components/RickData'
import Link from 'next/link'

export default function RickPage() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-green-900 to-blue-700'>
      <RickHeader />
      <div className='container mx-auto px-4 py-6'>
        <Link 
          href="/" 
          className='inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors shadow-lg'
        >
          กลับหน้าหลัก
        </Link>
      </div>
      <div className='space-y-12'>
        <RickData />
      </div>
    </main>
  )
}