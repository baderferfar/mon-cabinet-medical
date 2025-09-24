import React from 'react'
import { CabinetList } from './cabinet-list'
import { data } from '@/data/cabinet'


export const Cabinet = () => {
  return (
    <div className='flex py-20 px-5 flex-col gap-5  w-full' id="cabinet">
       
      <div className='text-foreground flex justify-center text-3xl font-extralight'>
         Notre Cabinet
      </div>
      <div>
        <p className='font-extralight text-2xl text-center'>Un environnement luxueux et serein pour vos soins</p>
      </div>
      <div className='flex justify-center'>
        <CabinetList items= {data}/>
      </div>
    </div>
  )
}
