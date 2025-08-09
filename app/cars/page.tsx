"use client"

import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';




type Car = {
    make: string
    model: string
    fuel_type: string
    year: number
    transmission: string
    drive: string
    image: string 
    id: number
}










const Cars: React.FC = () => {
 const [cars, setCars] = useState<Car[]>([])

 useEffect(() => {
    async function fetchCars(){
       

        const res = await fetch("/cars.json")
        if(!res.ok){
            throw new Error("Couldn't fetch cars")
        }

        setCars(await res.json())
    }
    fetchCars()
}, [])

if(cars.length === 0){
    return <h1>No cars available!</h1>
}

    



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {cars.map((car, index) => (
    <Link key={car.id} href={`/cars/${car.id}`}>
        <div
      key={index}
      className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition"
    >
      {car.image ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <Image
            src={`/${car.image}`}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-gray-200 flex items-center justify-center rounded-lg mb-4">
          <span>No image available</span>
        </div>
      )}
      
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {car.make} {car.model}
      </h2>
      <ul className="text-gray-600 space-y-1">
        <li><span className="font-semibold">Fuel:</span> {car.fuel_type}</li>
        <li><span className="font-semibold">Year:</span> {car.year}</li>
        <li><span className="font-semibold">Transmission:</span> {car.transmission}</li>
        <li><span className="font-semibold">Drive:</span> {car.drive}</li>
      </ul>
    </div>
    </Link>
  ))}
</div>

    
    
  )
}

export default Cars
