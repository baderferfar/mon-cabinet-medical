import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'



export const Accueil = () => {
  const doctolibUrl = process.env.DOCTOLIB_YASMINA_FERFAR || " ";

  return (
    
   <div id="accueil" className='text-foreground bg-[url("/images/cabinet/img-cabinet-flou.png")] bg-no-repeat  
    py-20 px-5 z-0 flex flex-col justify-center  h-[1200px] md:h-[1000px] w-full bg-cover bg-center '>
      
      <p className='text-center text-opacity-95 text-black text-5xl font-light z-50 ml-1 '>L&apos;Excellence Médicale au Service de la Beauté des Jambes et du Visage</p>
      <div className='bg-transparent text-lg text-black font-light mt-10 max-w-4xl mx-auto z-50'>
                              
          <p>❝Des protocoles de soins sur mesure</p>
          <p>Chaque patiente est unique et présente ses problématiques.</p>
          <p>Nous sommes à l’écoute et y répondons avec bienveillance et professionnalisme.</p>
          <p>La beauté est celle qui respecte votre identité et qui vous propose des</p>
          <p>solutions synergiques (laser, injection, médispa) permettant d’obtenir d’excellents</p>
          <p>résultats mais aussi et surtout de les pérenniser.</p>
          <p>Nous avons les clés à toutes les problématiques mais avant tout</p>
          <p>nous vous aidons aussi à hiérarchiser ces dernières pour que tout protocole de soins  établi</p>
          <p>lors d’une consultation médicale puisse vous garantir un résultat naturel et à long terme.❞</p>
        </div>
      <div className='flex justify-center gap-10 mt-10 flex-col sm:flex-row items-center'>
        <Button
          size={'lg'}
          variant={'link'}
          
          asChild
          className=' text-black text-xl w-full sm:w-auto '
        >
          <Link href={doctolibUrl}>
              Prendre rendez-vous 
          </Link>
        </Button>
        <Button  size={'lg'} variant={'link'} asChild className=' text-blact w-full text-xl sm:w-auto'>
          <a href="/soins" >Découvrir nos Soins</a>
        </Button>
      </div>
      
    </div>
    
  )
}
