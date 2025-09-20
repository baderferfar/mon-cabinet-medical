"use client"

import Image from "next/image";

import { Cabinet }  from "@/types"

interface CabinetCardProps {
    data: Cabinet;
}

export const CabinetCard: React.FC<CabinetCardProps> = ({data}) => {
 
  return (
    <div className=" group cursor-pointer rounded-xl border p-3 space-y-4">
      {/*Image */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src= {data.imageUrl}
          width={700}
          height={500}
          alt=""
          className="aspect-square object-cover rounded-md items-center"
        />
      </div>
    </div>
  )
}