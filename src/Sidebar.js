import React from 'react';
import sidebaricon1 from './images/icons/sidebaricon1.svg';
import sidebaricon2 from './images/icons/sidebaricon2.svg';
import sidebaricon3 from './images/icons/sidebaricon3.svg';
import sidebaricon4 from './images/icons/sidebaricon4.svg';
import sidebaricon5 from './images/icons/sidebaricon5.svg';
import sidebaricon6 from './images/icons/sidebaricon6.svg';
import sidebaricon7 from './images/icons/sidebaricon7.svg';
import sidebaricon8 from './images/icons/sidebaricon8.svg';
import sidebaricon9 from './images/icons/sidebaricon9.svg';

function Sidebar() {
  return (
    <div className="bg-white h-full mt-10 w-24 flex flex-col justify-between rounded-tr-3xl shadow-xl">
      <div className="p-4">
        <ul className="mt-4 flex flex-col justify-center items-center">
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon1} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon2} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon3} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon4} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon5} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon6} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon7} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon8} alt="Search" width={25} height={25}/>
          </li>
          <li className="text-black py-5 hover:text-gray-300 cursor-pointer">
            <img src={sidebaricon9} alt="Search" width={25} height={25}/>
          </li>
        </ul>
      </div>
      {/* Footer */}
      <footer className="p-4 text-white text-center">Footer</footer>
    </div>
  );
}

export default Sidebar;