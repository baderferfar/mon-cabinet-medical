import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


export const Accueil = () => {
  const doctolibUrl = process.env.DOCTOLIB_YASMINA_FERFAR || " ";

  return (
    
    <div id="accueil" className='text-foreground py-20 px-5  flex flex-col justify-center text-5xl font-extralight'>
      <p className='text-center'>L&apos;Excellence Médicale au Service de la Beauté des Jambes et du Visage</p>
      <div className='flex justify-center gap-10 mt-10 flex-col sm:flex-row items-center'>
        <Button
          size={'lg'}
          variant={'link'}
          asChild
          className='bg-background text-foreground text-xl w-full sm:w-auto'
        >
          <Link href={doctolibUrl}>
              Prendre rendez-vous 
          </Link>
        </Button>
        <Button variant="outline"    className='bg-background text-foreground w-full text-xl sm:w-auto'>
          <a href="/soins" >Découvrir nos Soins</a>
        </Button>
      </div>
    </div>
    
  )
}
