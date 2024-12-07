"use client"

import Link from "next/link";
import Image from "next/image";
import ThaiWeather from "./components/ThaiWeather";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-4">
          ผจญภัยในจักรวาล
        </h1>
        <p className="text-xl text-gray-300">
          เลือกโลกที่คุณต้องการสำรวจ
        </p>
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Pokemon Card */}
        <Link 
          href="/pokemon"
          className="
            bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600
            p-8 rounded-2xl
            transform hover:scale-105 transition-all duration-300
            hover:shadow-2xl hover:shadow-purple-500/20
            group relative overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all"/>
          <div className="relative space-y-4">
            <h2 className="text-4xl font-bold text-white group-hover:text-white/90">
              โลกโปเกมอน
            </h2>
            <p className="text-xl text-white/80 group-hover:text-white/70">
              สำรวจโปเกมอน พลังพิเศษ และคุณลักษณะต่างๆ
            </p>
            <ul className="text-white/70 space-y-2 mt-4">
              <li>• ค้นหาโปเกมอนตามชื่อ</li>
              <li>• ดูข้อมูลสถิติโดยละเอียด</li>
              <li>• ค้นพบความสามารถและประเภท</li>
            </ul>
          </div>
        </Link>

        {/* Star Wars Card */}
        <Link 
          href="/starwars"
          className="
            bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700
            p-8 rounded-2xl
            transform hover:scale-105 transition-all duration-300
            hover:shadow-2xl hover:shadow-yellow-500/20
            group relative overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all"/>
          <div className="relative space-y-4">
            <h2 className="text-4xl font-bold text-white group-hover:text-white/90">
              กาแล็กซี่สตาร์วอร์ส
            </h2>
            <p className="text-xl text-white/80 group-hover:text-white/70">
              ค้นพบตัวละคร ยานอวกาศ และดาวเคราะห์ต่างๆ
            </p>
            <ul className="text-white/70 space-y-2 mt-4">
              <li>• พบกับตัวละครที่มีชื่อเสียง</li>
              <li>• สำรวจยานอวกาศที่โด่งดัง</li>
              <li>• เยี่ยมชมดาวเคราะห์หลากหลาย</li>
            </ul>
          </div>
        </Link>

        {/* Rick and Morty Card */}
        <Link 
          href="/rick"
          className="
            bg-gradient-to-br from-green-400 via-teal-500 to-blue-600
            p-8 rounded-2xl
            transform hover:scale-105 transition-all duration-300
            hover:shadow-2xl hover:shadow-blue-500/20
            group relative overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all"/>
          <div className="relative space-y-4">
            <h2 className="text-4xl font-bold text-white group-hover:text-white/90">
              ริคและมอร์ตี้
            </h2>
            <p className="text-xl text-white/80 group-hover:text-white/70">
              ผจญภัยไปกับตัวละครจากมัลติเวิร์ส
            </p>
            <ul className="text-white/70 space-y-2 mt-4">
              <li>• ค้นพบตัวละครทั้งหมด</li>
              <li>• สำรวจโลกที่แตกต่าง</li>
              <li>• เรียนรู้เรื่องราวแต่ละตัวละคร</li>
            </ul>
          </div>
        </Link>
      </div>
      <ThaiWeather />

{/* Footer */}
<footer className="text-center mt-16 text-gray-500">
  <p>ขับเคลื่อนโดย PokeAPI, SWAPI, Rick and Morty API และ OpenWeatherMap</p>
</footer>
    </main>
  );
}