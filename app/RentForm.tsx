// Client Component - interactivitate + UI
"use client";

import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from 'next/link';

type Car = {
  id: number;
  make: string;
  model: string;
  fuel_type: string;
  year: number;
  transmission: string;
  drive: string;
  image: string;
  description: string
  price: number
};

type Props = {
  car: Car;
};

const RentForm = ({ car }: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);


  const rentalDays = startDate && endDate 
    ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const totalPrice = rentalDays * car.price;
  
  


  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-md text-center">
    {submitted ? (
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Bifa verde */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-green-600">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600">
          Thanks for renting the {car.make} {car.model}.  
          Total price: <span className="font-semibold text-gray-800">${totalPrice}</span>
        </p>
        <Link href="/"><p>Go back <span className='font-bold'>home</span></p></Link>
      </div>
    ) : (
      <form
        className="space-y-6 text-left"
        onSubmit={(e) => {
          e.preventDefault();

          const username = (e.currentTarget.username as HTMLInputElement).value.trim();
          const email = (e.currentTarget.email as HTMLInputElement).value.trim();

          if (!username) {
            alert("Please enter your username");
            return;
          }
          if (!email) {
            alert("Please enter your email");
            return;
          }
          if (!startDate || !endDate) {
            alert("Please select both start and end dates");
            return;
          }
            localStorage.setItem(
    `booking-${car.id}`,
    JSON.stringify({
      endDate: endDate.toISOString()
    })
  );

          // Dacă totul e valid, afișăm bifa
          setSubmitted(true);
        }}
      >
        <h1 className="text-2xl font-bold text-orange-600 mb-4">
          {car.make} {car.model} is a great choice!
        </h1>

        <div>
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select start and end date"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {rentalDays > 0 && (
          <p className="mt-2 text-lg font-semibold text-orange-600">
            Total Price: ${totalPrice}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          Rent Now
        </button>
      </form>
    )}
  </div>
  );
};

export default RentForm;
