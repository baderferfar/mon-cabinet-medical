"use client"
import { useCallback, useEffect, useState } from 'react';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';


// import Image from 'next/image'


import MobileMenu from '@/components/mobile-menu';
import NavbarItem from '@/components/navbar-item';
// import { ModeToggle } from './mode-toggle';
// import logo from '@/assets/images/impe.svg'


const TOP_OFFSET = 66;
const LibelleName = "Clinique Médecine Esthétique Paris Etoile";


export const Navbar = () => {
 
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(( current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-50">
      <div className={`px-5 py-5 flex flex-row  justify-center  transition duration-500 ${showBackground ? 'bg-background text-foreground bg-opacity-90' : ''}`}>
          <div className="mr-25" >
            <div className='flex flex-col items-center justify-center'>
               <h3 className="text-xl font-semibold w-45 text-center5">{LibelleName}</h3>
               
            </div>   
               {/*
               <Image
                    src="/impe.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="w-auto h-12">
               </Image>
               */}
         </div>
        <div className="flex-row items-start gap-7 hidden lg:flex text-gray-500">
          <NavbarItem label="Accueil" href="/" />
          <NavbarItem label="Soins" href="/soins"/>
          <NavbarItem label="Equipe" href="/equipe"/>
          <NavbarItem label="Cabinet" href="/cabinet"/>
          <NavbarItem label="Contact" href="/contact"/>
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row justify-between gap-2 ml-7 cursor-pointer relative">
         
          <MenuIcon className="w-6 text-gray-500   "  />
          <ChevronDownIcon className={`w-4 text-gray-500 fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
         
          <MobileMenu visible={showMobileMenu} />
        </div>
        {/*
          <div className="flex flex-row ml-auto gap-7 items-center">
      
            <div>
              <ModeToggle />          
            </div>
        
          </div>
         */}
      </div>
    </nav>
  )
};


