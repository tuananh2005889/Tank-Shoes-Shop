import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div>
      {/* navbar */}
        <div className='w-screen h-14 bg-gradient-to-r from-purple-800 to-pink-400 shadow-md p-1 justify-center items-center shadow-black flex relative'>
          <div className='w-16 relative flex h-full bg-cover bg-center z-50'>
            <Link
						to="/">
            <div  style={{ backgroundImage: `url(${logo})` }} className='w-16 relative flex h-full bg-cover bg-center z-50'>

            </div>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout
