"use client"


import Image from "next/image";

import { Soin }  from "@/types"

interface SoinCardProps {
    data: Soin;
}

export const SoinCard: React.FC<SoinCardProps> = ({data}) => {
 
  return (
    <div className=" flex flex-col items-center group cursor-pointer rounded-xl border p-3 space-y-4 mx-auto">
      {/*Image */}
      <div >
        <Image 
          src= {data.imageUrl}
          height={800}
          width={600}
          alt=""
          className="aspect-square object-cover rounded-md items-center"
        />
      </div>
      {/*Caractéristiques*/}
      <div className=" font-extralight flex flex-col gap-2">
        <p className="text-2xl">
          {data.title}
        </p>
        <p className="text-xl">
          {data.traitement}
        </p>
      </div>
      {/* Table
      <div className="text-xl flex flex-col justify-between font-extralight ">
         <ul className="list-disc space-y-1 space-x-4 ml-10">
            <li>{data.caracteristique.libelle_1} </li>
            <li>{data.caracteristique.libelle_2} </li>
            <li>{data.caracteristique.libelle_3} </li>
         </ul>
        
      </div>
       */}
    </div>
  )
}


