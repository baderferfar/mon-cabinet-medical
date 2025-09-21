import React from 'react'
import { MedecinList } from './medecin-list'
import { data } from '@/data/medecins'

export const Equipe = () => {
  return (
    <div className='flex flex-col gap-5 py-20 px-5'>
      <div className='text-white  flex justify-center text-3xl font-extralight'>
        Notre Equipe Médicale
      </div>
      <div>
        <p className='font-extralight text-2xl text-center'>Des spécialistes d&apos;excellence à votre service</p>
      </div>
            <div>
              <MedecinList items={data}/>
            </div>
      
    </div>
  )
}
