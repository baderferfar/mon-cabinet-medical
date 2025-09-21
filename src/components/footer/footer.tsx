import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import logo from '@/assets/images/impe.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

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
        { text: "27 Avenue de la Grande Armée 75017 Paris", href: "#" },
        { text: "(33)-0601020304", href: "#" },
        { text: "Doctolib ou par téléphone", href: "#" },
        { text: "Lun-Ven: 9h-18h Sam: 9h-13h", href: "#" },      
      ],
    },
    {
      title: "Company",
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
        { text: "Traitement des varices", href: "#" },
        { text: "Injections esthétiques", href: "#" },
        { text: "Soins du visage", href: "#" },
        { text: "Drainage lymphatiques", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Facebook", href: "#" },
        { text: "Instagram", href: "#" },
        { text: "X", href: "#" },
        { text: "Contact", href: "/contact" },
      ],
    },
  ],
  copyright = "© 2025 Yasmina Ferfar. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "https://www.launchuicomponents.com/" },
    { text: "Terms of Service", href: "https://www.launchuicomponents.com/" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    
    <footer className={cn("bg-emerald-600 w-full mt-8", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="px-4">
            <FooterColumn className="col-span-3 sm:col-span-4 md:col-span-1">
              <div className="flex items-center gap-2">
               <Image 
                  alt="logo"
                  src= {logo}
                  height={80}
                  width={100}
                  className="dark:invert"
                  priority
                />
                <div className="flex flex-col  justify-center gap-6">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-sm "> L&apos;excellence médicale au service de la beauté des jambes et du visage</p>
                </div>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
                <FooterColumn key={index}>
                  <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-muted-foreground text-sm"
                    >
                      {link.text}
                    </a>
                  ))}
                </FooterColumn>
              ))}

          </FooterContent>
          
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-2">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>

    
  );
}
