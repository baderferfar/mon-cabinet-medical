import { ReactNode } from "react";

import { cn } from "@/lib/utils";

//import logo from '@/assets/images/impe.svg'
import Image from "next/image";


import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
// import { ModeToggle } from "@/components/mode-toggle";


interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}



export default function FooterSection({

  
  
  name = "Institut Médicale Paris Etoile",
  columns = [
    {
      title: "Informations Pratiques",
      links: [
        { text: "26 Avenue de la Grande Armée 75017 Paris", href: "#" },
        { text: "Tél. 01 86 04 38 20", href: "#" },
        { text: "Doctolib ou par téléphone", href: "#" },
        { text: "Lun-Ven: 9h-18h Sam: 9h-13h", href: "#" },      
      ],
    },
    {
      title: "Liens rapides",
      links: [
        { text: "Accueil", href: "/" },
        { text: "Soins", href: "/soins" },
        { text: "Equipe", href: "/equipe" },
        { text: "Cabinet", href: "/contact" },
      ],
    },
        {
      title: "Nos Spécialités",
      links: [
        { text: "Varicosité, Lipoedemie,", href: "#" },
        { text: "Epilation laser, Rajeunissement,", href: "#" },
        { text: "Taches pigmentaires, Blépharoplastie médicale,", href: "#" },
        { text: "Rhinoplatie médicale, Sécheresse vaginale,", href: "#" },
        { text: "Injections botox et acide hyaluronique.", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Facebook", href: "#" },
        { text: "Instagram", href: "#" },
        { text: "X(twitter)", href: "#" },
        { text: "Contactez-nous", href: "/contact" },
      ],
    },
  ],
  copyright = "© 2025 Yasmina Ferfar. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
  ],
  // showModeToggle = true,
  className,
}: FooterProps) {
  return (
    
    <footer className={cn("bg-black text-white w-full mt-8 ml-4 mr-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="px-4">
            <FooterColumn className="col-span-3 sm:col-span-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex flex-col  justify-center gap-6">
                  <h3 className="text-xl font-semibold " >{name}</h3>
                  <p className="text-sm mb-2"> L&apos;excellence médicale au service de la beauté des jambes et du visage</p>
                  <Image
                    src="/impe.svg"
                    alt="Logo"
                    width={60}
                    height={600}
                    className="w-auto h-12 mt-5" >
                  </Image>
                </div>
              </div>
            </FooterColumn>
            <div className="col-span-3 sm:col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {columns.map((column, index) => (
                <FooterColumn key={index}>
                  <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-sm"
                    >
                      {link.text}
                    </a>
                  ))}
                </FooterColumn>
              ))}
            </div>

          </FooterContent>
          
          <FooterBottom>
          <div className="w-full flex items-center text-white">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <div>{copyright}</div>
              <div className="flex items-center gap-2">
                {policies.map((policy, index) => (
                  <a key={index} href={policy.href}>
                    {policy.text}
                  </a>
                ))}
                {/*{showModeToggle && <ModeToggle />}*/}
              </div>
            </div>
          </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
