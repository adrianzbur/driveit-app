import React from 'react'
import logo from '../assets/driveit-logo.png'


const Navbar = () => (
    <nav className="bg-darkblue p-3 text-white flex justify-between items-center">
    <div className="text-white text-xl font-semibold"><img className=' w-[380px] ' src={logo} alt="logo" /></div>
    <div className="text-xl font-bold px-5">DriveIt</div>
    <div className="space-x-7">
      <a href="#" className="hover:underline">
        Home
      </a>
      <a href="#" className="hover:underline">
        Car
      </a>
      <a href="#" className="hover:underline">
        Services
      </a>
      <a href="#" className="hover:underline">
        Login
      </a>
    </div>
    <div className='px-8'></div>
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-8">
          <li className="text-white">Typ vozidla</li>
          <li className="text-white">Cena od</li>
          <li className="text-white">Cena do</li>
          <li className="text-white">Dátum vyzdvihnutia</li>
          <li className="text-white">Dátum odovzdania</li>
        </ul>
      </div>
      </nav>
  );


export default Navbar;
