import React from 'react'
import { SoinList } from './soin-list'
import { data } from '@/data/soins'


export const Soins = () => {
  
  return (
    <div className='flex flex-col  gap-5 py-24 px-5'>
      <div className='text-foreground  flex justify-center text-3xl font-extralight'>
        <p>Nos Soins Spécialisés</p>
      </div>
      <div>
        <p className='font-extralight text-2xl text-center'>Une approche médicale d&apos;Excellence pour l&apos;esthétique des jambes et du visage</p>
      </div>
      <div>
        <SoinList items={data}/>
      </div>
      
    </div>
  )
}
