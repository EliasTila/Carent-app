import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
 <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
  <div className="flex space-x-8">
    <h3 className=' text-orange-600 font-bold'>Carent</h3>
    <Link href="/"><h3>Home</h3></Link>
    <Link href="/cars"><h3>Cars</h3></Link>
    <Link href="/about"><h3>About</h3></Link>
  </div>
    <Link href="/register"><h3>Register</h3></Link>
</nav>
  )
}

export default Navbar
