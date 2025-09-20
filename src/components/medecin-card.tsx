 "use client"
 
 
 import Image from "next/image";
 
 import { Medecin }  from "@/types"
 
 interface MedecinCardProps {
     data: Medecin;
 }
 
 export const MedecinCard: React.FC<MedecinCardProps> = ({data}) => {
  
   return (
     <div className=" group cursor-pointer rounded-xl border p-3 space-y-4">
       {/*Image */}
       <div className="aspect-square rounded-xl bg-gray-100 relative">
         <Image 
           src= {data.imageUrl}
           fill
           alt=""
           className="aspect-square object-cover rounded-md items-center"
         />
       </div>
       {/*Caractéristiques*/}
       <div className=" font-extralight flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2">
         <p className="text-2xl">
           {data.name}
         </p>
         <p className="text-xl">
           {data.specialite}
         </p>
        </div>
        <div className="font-extralight flex flex-col gap-2" > 
          <p className="text-2xl">
            {data.question}
          </p>
          <p className="text-xl">
            {data.reponse}
          </p>
         </div>
       </div>
     </div>
   )
 }
 
 