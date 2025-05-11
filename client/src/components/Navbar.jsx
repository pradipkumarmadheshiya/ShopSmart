import React from 'react'
import {Link} from "react-router-dom"
import { useAppContext } from '../context/AppContext'
import {X, Menu} from "lucide-react"

const Navbar = () => {

    const {isMenuOpen, setIsMenuOpen}=useAppContext()

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4 py-3 sm:py-4'>
        <div className='flex items-center justify-between'>
            <Link to={"/"} className='flex'>
                <img src="/logo.jpg" alt="logo" 
                className='h-6 w-6'/>
                <p>Commerce</p>
            </Link>
            <div className='flex items-center'>
                <button onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className='sm:hidden'>
                    {
                        isMenuOpen? <X/> : <Menu/>
                    }
                </button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar