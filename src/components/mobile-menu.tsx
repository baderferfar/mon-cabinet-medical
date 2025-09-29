"use client"
import Link from "next/link";

interface MobileMenuProps {
  visible?: boolean;
}

const doctolibUrl = process.env.DOCTOLIB_YASMINA_FERFAR || " ";

const MobileMenu  = ({ visible }: MobileMenuProps) => {
  
  if (!visible) {
    return null;
  }
  
  return (
    <div className="bg-black text-white w-30 absolute top-8 left-0 py-5 flex-col flex">
      <div className="flex flex-col gap-4 items-start">
        <div className="px-0.5 text-center hover:underline">
          <Link href="/">Accueil</Link>
        </div>
        <div className="px-0.5 text-center hover:underline">
          <a href="/soins">Soins</a>
        </div>
        <div className="px-0.5 text-center hover:underline">
          <a href="/equipe">Equipe</a>
        </div>
        <div className="px-0.5 text-center hover:underline">
          <a href="/cabinet">Cabinet</a>
        </div>
        <div className="px-0.5 text-center hover:underline">
          <a href={doctolibUrl}>Prendre RDV</a>
        </div>
        <div className="px-0.5 text-center hover:underline">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;