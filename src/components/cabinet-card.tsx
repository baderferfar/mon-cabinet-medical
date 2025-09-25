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
      <div>
        <Image 
          src= {data.imageUrl}
          height={600}
          width={400}
          alt=""
          className="aspect-square object-cover rounded-md items-center"
        />
      </div>
    </div>
  )
}