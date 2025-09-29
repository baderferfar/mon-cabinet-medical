import React from 'react'
import { Button } from './ui/button'




export const Accueil = () => {
  const doctolibUrl = process.env.DOCTOLIB_YASMINA_FERFAR || " ";

  return (
    
   <div id="accueil" className='text-foreground bg-[url("/images/cabinet/img-cabinet-flou.png")] bg-no-repeat  
    py-20 px-5 z-0 flex flex-col justify-center  h-[1200px] md:h-[1000px] w-full bg-cover bg-center '>
      
      <p className='text-center text-opacity-70 text-black text-5xl font-light z-50 '>
        L&apos;excellence médicale au service de votre beauté
      </p>
      <div className='bg-transparent text-xl text-black font-light mt-10 max-w-4xl mx-auto z-50'>
          <p>❝ Chaque patiente est unique et présente ses problématiques. </p>
          <p>Nous sommes à l’écoute et y répondons avec bienveillance et professionnalisme.</p>
          <p>La beauté est celle qui respecte votre identité et qui vous propose des</p>
          <p>solutions synergiques (laser, injection, médispa) permettant d’obtenir d’excellents</p>
          <p>résultats mais aussi et surtout de les pérenniser.</p>
          <p>Nous avons les clés à toutes les problématiques mais avant tout, nous vous aidons</p>
          <p>aussi à hiérarchiser ces dernières pour que tout protocole de soins  établi lors d’une</p>
          <p>consultation médicale puisse vous garantir un résultat naturel et à long terme. ❞</p>
      </div>
      <div>
        <p className='text-xl text-center m-4 font-extralight'>Les fondatrices Dr. Bor & Dr. Ferfar</p>
      </div>
      <div className='flex justify-center gap-10 mt-10 flex-col sm:flex-row items-center'>
        <Button
          size={'lg'}
          variant={'link'}
          
          asChild
          className=' text-black text-xl w-full sm:w-auto '
        >
          <a href={doctolibUrl} target="_blank" rel="noopener noreferrer">
              Prendre rendez-vous 
          </a>
        </Button>
        <Button  size={'lg'} variant={'link'} asChild className=' text-blact w-full text-xl sm:w-auto'>
          <a href="/soins" >Découvrir nos Soins</a>
        </Button>
      </div>
      
    </div>
    
  )
}
