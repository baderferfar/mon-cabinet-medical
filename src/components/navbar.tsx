"use client"
import { useCallback, useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';


//import Image from 'next/image'


import MobileMenu from '@/components/mobile-menu';
import NavbarItem from '@/components/navbar-item';
import { ModeToggle } from './mode-toggle';
// import logo from '@/assets/images/impe.svg'


const TOP_OFFSET = 66;
const name  = "Institut Médicale Paris Etoile";

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
    <nav className="w-full fixed z-0">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-background text-foreground bg-opacity-90' : ''}`}>
          <div className="flex flex-col  justify-center gap-6">
               <h3 className="text-xl font-semibold">{name}</h3>
         </div>
        <div className="flex-row ml-8 gap-7 hidden lg:flex ">
          <NavbarItem label="Accueil" href="/" />
          <NavbarItem label="Soins" href="/soins"/>
          <NavbarItem label="Equipe" href="/equipe"/>
          <NavbarItem label="Cabinet" href="/cabinet"/>
          <NavbarItem label="Contact" href="/contact"/>
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-foreground text-sm">Browse</p>
          <ChevronDownIcon className={`w-4 text-foreground fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div>
            <ModeToggle />          
          </div>
        </div>
      </div>
    </nav>
  )
};


