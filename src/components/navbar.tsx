"use client"
import { useCallback, useEffect, useState } from 'react';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';


const TOP_OFFSET = 66;
const libelleName = "Esthe BF Clinic";
// const doctolibUrl = process.env.DOCTOLIB_YASMINA_FERFAR || ""


export const Navbar = () => {
 
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [isClient, setIsClient] = useState(false)


 useEffect(() => {

    setIsClient(true)
    
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

  if (!isClient) 
      return null;
  return (
    <nav className="w-full fixed z-50">
      <div className={`px-15 py-5 flex flex-row  justify-start  transition duration-500 ${showBackground ? 'bg-background text-foreground bg-opacity-90' : ''}`}>

          <div className='flex flex-row items-center justify-start'>
              <Image
                  src="/logo/esthebfclinic.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-auto h-12 mr-1" >
              </Image>

              <h3 className="text-xl font-semibold w-45 mr-4 text-center text-gray-500">{libelleName}</h3>
          </div>
          <div className="flex-row items-start gap-7 px-50 hidden lg:flex text-gray-500 text-xl font-semibold">
            <Link href="/">Accueil  |</Link>
            <Link href="/soins">Soins  | </Link>
            <Link href="/equipe">Equipe  | </Link>
            <Link href="/cabinet">Cabinet  | </Link>
            <a href="https://www.doctolib.fr/angiologue/paris/yasmina-ferfar-fbd22b47-cfb1-4d74-934e-4bd692667242/" target="_blank" >Prendre RDV  | </a>
            <Link href="/contact">Contact</Link>
          </div>
          <div onClick={toggleMobileMenu} className="lg:hidden md:hidden flex flex-row justify-between  mr-3 cursor-pointer relative">
            <MenuIcon className="w-6 text-gray-500   "  />
            <ChevronDownIcon className={`w-4 text-gray-500 fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
            
            { (showMobileMenu) &&
                <div className="bg-black text-white w-25 text-sm  absolute top-8 left-0 py-5 flex-col flex">
                  <div className="flex flex-col gap-4 items-start">
                    <div className="px-0.5 text-center hover:underline">
                      <Link href="/">Accueil</Link>
                    </div>
                    <div className="px-0.5 text-center hover:underline">
                      <Link href="/soins">Soins</Link>
                    </div>
                    <div className="px-0.5 text-center hover:underline">
                      <Link href="/equipe">Equipe</Link>
                    </div>
                    <div className="px-0.5 text-center hover:underline">
                      <Link href="/cabinet">Cabinet</Link>
                    </div>
                    <div className="px-0.5 text-center hover:underline hover:pointer-events-auto">
                      <a href="https://www.doctolib.fr/angiologue/paris/yasmina-ferfar-fbd22b47-cfb1-4d74-934e-4bd692667242/" target="_blank" rel="noopener noreferrer">Prendre RDV</a>
                    </div>
                    <div className="px-0.5 text-center hover:underline">
                      <Link href="/contact">Contact</Link>
                    </div>
                  </div>
                </div>
            }
          </div>
      </div>
    </nav>
  )
};


