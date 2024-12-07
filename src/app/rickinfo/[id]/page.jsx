"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function RickInfo() {
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
        if (!response.ok) throw new Error('ไม่พบตัวละคร');
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
      <div className='min-h-screen bg-gradient-to-b from-green-900 to-blue-700 p-8'>
        <Link href="/rick" className='inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors shadow-lg'>
          กลับ
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
    <div className='min-h-screen bg-gradient-to-b from-green-900 to-blue-700 p-8'>
      <Link href="/rick" className='inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors shadow-lg'>
        กลับ
      </Link>
      <div className='flex justify-center items-center mt-10'>
        <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-green-300/30 shadow-xl max-w-4xl w-full'>
          {loading ? (
            <div className='text-white text-xl animate-pulse'>กำลังโหลด...</div>
          ) : character && (
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='relative w-full aspect-square'>
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className='rounded-lg object-cover'
                  priority
                />
              </div>
              <div className='space-y-6 text-white'>
                <h3 className='text-4xl font-bold mb-6 drop-shadow-lg'>
                  {character.name}
                </h3>
                <div className='grid grid-cols-2 gap-6'>
                  <div>
                    <span className='text-green-200 block mb-2 text-xl'>ข้อมูลทั่วไป</span>
                    <div className='space-y-2'>
                      <p>สถานะ: {character.status}</p>
                      <p>สายพันธุ์: {character.species}</p>
                      <p>เพศ: {character.gender}</p>
                    </div>
                  </div>
                  <div>
                    <span className='text-green-200 block mb-2 text-xl'>ที่อยู่</span>
                    <div className='space-y-2'>
                      <p>ต้นกำเนิด: {character.origin.name}</p>
                      <p>ปัจจุบัน: {character.location.name}</p>
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

export default RickInfo