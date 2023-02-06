import React from 'react';
import { FaDiscord, FaTwitter, FaSatellite, FaWater } from 'react-icons/fa';
import kami from '../assets/kami.png';

function Header() {
  return (
    <header className="header mt-4 flex justify-between align-center mx-12">
      <div className="logo">
        <img src={kami} alt="" className="h-8 w-20" />
      </div>
      <div className="header-buttons">
        <ul className="header-buttons-lists flex align-center justify-between">
          <li className="header-button lg:bg-gray-200 rounded-md py-2 px-3 mx-2 hover:bg-gray-300">
            <a href="#">
              <FaSatellite />
            </a>
          </li>
          <li className="header-button lg:bg-gray-200 rounded-md py-2 px-3 mx-2 hover:bg-gray-300">
            <a href="#">
              <FaWater />
            </a>
          </li>
          <li className="header-button lg:bg-gray-200 rounded-md py-2 px-3 mx-2 hover:bg-gray-300 d-none sm:d-inline">
            <a href="#">
              <FaDiscord />
            </a>
          </li>
          <li className="header-button lg:bg-gray-200 rounded-md py-2 px-3 mx-2 hover:bg-gray-300 d-none sm:d-inline">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <button className="bg-gray-600 text-white text-xs tracking-widest py-1/2 rounded-md px-3 hover:scale-[0.9]">
            CONNECT
          </button>
        </ul>
      </div>
    </header>
  );
}

export default Header;
