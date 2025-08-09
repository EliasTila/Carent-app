"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

type Car = {
  id: number;
  make: string;
  model: string;
  fuel_type: string;
  year: number;
  transmission: string;
  drive: string;
  image: string;
  description: string;
  price: number;
};

export default function DetailsForCarsClient({ car }: { car: Car }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const bookingData = localStorage.getItem(`booking-${car.id}`);
    if (bookingData) {
      const { endDate } = JSON.parse(bookingData);
      if (new Date(endDate) > new Date()) {
        setMessage(`Car available on ${new Date(endDate).toLocaleDateString()}`);
      }
    }
  }, [car.id]);

  return (
    <>
      <div className="relative max-w-4xl mx-auto p-6 flex gap-8 bg-gray-50 rounded-lg shadow-lg mt-[100px]">
  <Link
    href="/cars"
    className="absolute top-6 left-6 flex items-center gap-2 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg transition"
  >
    <ArrowLeft className="w-6 h-6 text-gray-600" />
  </Link>

  <div className="relative flex-shrink-0">
    <Image
      src={`/${car.image}`}
      alt={`${car.make} ${car.model}`}
      width={600}
      height={600}
      className={`object-cover rounded-lg ${message ? "opacity-50 blur-sm" : ""}`}
    />
    {message && (
      <div className="absolute inset-0 flex items-center justify-center rounded-lg pointer-events-none">
        <p className="text-6xl font-bold text-red-600 uppercase text-center px-4 drop-shadow-lg">
          {message}
        </p>
      </div>
    )}
  </div>

  <div className="flex flex-col justify-center gap-4 text-gray-800">
    <h1 className="text-4xl font-bold text-orange-600">
      {car.make} {car.model}
    </h1>
    <p className="text-lg text-gray-600 italic">{car.description}</p>
    <ul className="space-y-2 text-gray-700">
      <li>
        <span className="font-semibold text-orange-500">Fuel Type:</span>{" "}
        {car.fuel_type}
      </li>
      <li>
        <span className="font-semibold text-orange-500">Year:</span>{" "}
        {car.year}
      </li>
      <li>
        <span className="font-semibold text-orange-500">Transmission:</span>{" "}
        {car.transmission}
      </li>
      <li>
        <span className="font-semibold text-orange-500">Drive:</span> {car.drive}
      </li>
      <li>
        <span className="font-semibold text-orange-500">Price per day:</span>{" "}
        {car.price}
      </li>
    </ul>
  </div>
</div>

<div className="flex justify-center items-center mt-[100px] mb-[60px]">
  <Link href={`/rent/${car.id}`}>
    <button
      type="button"
      onClick={(e) => {
        if (message) e.preventDefault();
      }}
      className="group relative w-64 h-20 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-2xl shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="relative z-10">Rent</span>
    </button>
  </Link>
</div>


      
    </>
  );
}
