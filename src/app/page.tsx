

import {Accueil} from "@/components/accueil";
import { Soins } from "@/components/soins";
import { Equipe } from "@/components/equipe";
import { Cabinet } from "@/components/cabinet";
import { Contact } from "@/components/contact";


export default function Home() {
  return (
    <div className="gap-5 flex flex-col items-center justify-center min-h-screen">  
      <Accueil/>
      <Soins/>
      <Equipe/>
      <Cabinet/>
      <Contact/>
    </div>
  );
}
