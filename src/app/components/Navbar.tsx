'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() 

  const toggleMenu = () => setIsOpen(!isOpen)


  const isActive = (path: string) => pathname === path ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-500'

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
       
          <Link href="/">
            <span className="text-2xl font-bold text-orange-500 cursor-pointer">E-Learn</span>
          </Link>


          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={isActive('/')}>Home</Link>
            <Link href="/courses" className={isActive('/courses')}>Courses</Link>
            <Link href="/dashboard/tutor" className={isActive('/dashboard/tutor')}>Dashboard</Link>
            <Link href="/auth/login" className={isActive('/auth/login')}>Login</Link>
            <Link href="/auth/register" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Sign Up</Link>
          </div>


          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-orange-500 focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Home</Link>
          <Link href="/courses" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Courses</Link>
          <Link href="/dashboard/tutor" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Dashboard</Link>
          <Link href="/auth/login" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Login</Link>
          <Link href="/auth/register" className="block px-4 py-2 bg-orange-500 text-white rounded mx-4 my-2 text-center hover:bg-orange-600 transition">Sign Up</Link>
        </div>
      )}
    </nav>
  )
}
