

import {Accueil} from "@/components/accueil";
import { Soins } from "@/components/soins";
import { Equipe } from "@/components/equipe";
import { Cabinet } from "@/components/cabinet";
import { Contact } from "@/components/contact";
import type { Metadata } from "next";
import FooterSection from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Cabinet Médical Paris Etoile",
  description: "Mon Cabinet Médical à Paris Etoile - Soins de qualité pour votre santé et bien-être.",
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: light)",
          url: "/clinic.png",
          href: "/clinic.png",
        },
        {
          media: "(prefers-color-scheme: dark)",
          url: "/clinic.png",
          href: "/clinic.png",
        }
      ]
    }
};

export default function Home() {
  return (
    <div className="gap-5 flex flex-col items-center justify-center ">
      <Accueil/>
      <Soins/>
      <Equipe/>
      <Contact/>
      <Cabinet/>
      <FooterSection/>
    </div>
  );
}
