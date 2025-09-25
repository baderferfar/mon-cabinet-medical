import Link from "next/link";
interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu  = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  }
  
  return (
    <div className="bg-black text-white w-20 absolute top-8 left-0 py-5 flex-col white flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center hover:underline">
          <Link href="/">Accueil</Link>
        </div>
        <div className="px-3 text-center hover:underline">
          <Link href="/soins">Soins</Link>
        </div>
        <div className="px-3 text-center hover:underline">
          <Link href="/equipe">Equipe</Link>
        </div>
        <div className="px-3 text-center hover:underline">
          <Link href="/cabinet">Cabinet</Link>
        </div>
        <div className="px-3 text-center hover:underline">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;