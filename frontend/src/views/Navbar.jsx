import React, { useEffect } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';

import avatar from '../data/avatar.jpg';
import { Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Setting} from '.';
import { useStateContext } from '../contexts/ContextProvider';

import nttlogo from '../data/nttdatalogo.svg';

import { IoHomeOutline } from "react-icons/io5";

import { MdOutlineWbSunny } from "react-icons/md";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
 
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 "
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
 
);

const Navbar = () => {
  const { activeMenu,setActiveMenu,mainPage,setMainPage,initialState,handleClick,isClicked,currentMode,} = useStateContext();
  console.log("ok",initialState,isClicked)
 
 console.log("main page",activeMenu)
 if(activeMenu === 'false')
 {
  setActiveMenu(false)
 }
  useEffect(() => { 
    localStorage.setItem("openAI_Configuration",activeMenu)
  })
  
    setMainPage(false)
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <div className='flex justify-between md:mx-0 relative w-full'  > 
  
    <div><img
          style={{width:"250px",marginLeft:"-15px"}}
          src={nttlogo}
          alt="nttlogo"
        />
    </div>

      <div className='absolute inline-flex rounded-full h-2 w-2 right-60 top-2' > 
     {(activeMenu) &&
      <NavButton title="Chat" customFunc={() => handleClick('setting')}
    
      color={ currentMode === 'Light'  ? 'black' : 'black'}  icon={<FiSettings />} />}
      {!(activeMenu) &&  <NavButton title="Chat" customFunc={() => {setMainPage(true);setActiveMenu(true)}}
    
    color={ currentMode === 'Light'  ? 'black' : 'black'}  icon={<IoHomeOutline />} />}
      <NavButton title="Notification" customFunc={() => handleClick('notification')}
       
      color={ currentMode === 'Light'  ? 'black' : 'black'}  icon={<MdOutlineWbSunny />} />
       
          <div
            className="flex items-center mt-4 gap-2 cursor-pointer p-1  rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p className='whitespace-nowrap flex '>
              <span className="text-black-400 text-14 text-black dark:text-black"  >Hi,</span>{' '}
              <span className="flex text-black-400 font-bold ml-1 text-14 text-black dark:text-black"  >
                Michael
                <MdKeyboardArrowDown className="text-black text-14 mt-1" />
              </span>
            </p>
          
          </div>
          {mainPage && <Navigate replace={true} to='/' />}
           {isClicked.setting && <Setting /> } 
           
           

      </div>
    </div>
    </div>
  );
};

export default Navbar;
