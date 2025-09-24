"use client"


import Image from "next/image";

import { ContactInfo }  from "@/types"

interface ContactCardProps {
    data: ContactInfo;
}

export const ContactCard: React.FC<ContactCardProps> = ({data}) => {
 
  return (
    <div className=" group cursor-pointer rounded-xl border p-3 space-y-4">
      {/*Icon */}
      <div className="flex flex-row items-center gap-4">
        <Image 
          src= {data.iconUrl}
          height={25}
          width={25}
          alt=""
          className="aspect-square object-cover rounded-md items-center"
        />
        <p className="text-xl">
          {data.title}
        </p>
      </div>
    
      {/*Caractéristiques*/}
      <div className=" font-extralight flex flex-col gap-2 ">

        <p className="text-lg">
          {data.libelle1}
        </p>
        <p className="text-lg">
          {data.libelle2}
        </p>
        <p className="text-lg">
          {data.libelle3}
        </p>


      </div>


    </div>
  )
}
