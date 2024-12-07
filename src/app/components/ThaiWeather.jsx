// components/ThaiWeather.jsx
"use client"

import React, { useState, useEffect } from 'react';

const ThaiWeather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const cities = [
    { id: 1, name: 'Bangkok', nameTH: 'กรุงเทพ' },
    { id: 2, name: 'Chiang Mai', nameTH: 'เชียงใหม่' },
    { id: 3, name: 'Phuket', nameTH: 'ภูเก็ต' },
    { id: 4, name: 'Pattaya', nameTH: 'พัทยา' },
    { id: 5, name: 'Khon Kaen', nameTH: 'ขอนแก่น' }
  ];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const promises = cities.map(city =>
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name},th&units=metric&appid=5f6446581e5f3cbb38a87a4e111791bc`)
            .then(res => res.json())
        );
        
        const results = await Promise.all(promises);
        const weatherResults = results.map((data, index) => ({
          ...data,
          nameTH: cities[index].nameTH,
          cityId: cities[index].id // เพิ่ม cityId เพื่อใช้เป็น key
        }));
        setWeatherData(weatherResults);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="mt-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">สภาพอากาศในประเทศไทย</h2>
      {loading ? (
        <div className="text-center text-white">กำลังโหลดข้อมูลสภาพอากาศ...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {weatherData.map((city) => (
            <div 
              key={city.cityId} // ใช้ cityId เป็น key
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4
                        hover:bg-white/20 transition-all duration-300
                        border border-blue-300/30 hover:border-blue-400/50"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{city.nameTH}</h3>
                {city.weather && city.weather[0] && (
                  <img 
                    src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                    alt={city.weather[0].description}
                    className="w-16 h-16 mx-auto"
                  />
                )}
                <div className="text-3xl text-white font-bold mb-2">
                  {Math.round(city.main?.temp || 0)}°C
                </div>
                <div className="text-sm text-gray-300">
                  <p>ความชื้น: {city.main?.humidity || 0}%</p>
                  <p>ลม: {city.wind?.speed || 0} m/s</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThaiWeather;