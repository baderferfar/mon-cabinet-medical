import { Cabinet } from '@/components/cabinet'
import FooterSection from '@/components/footer/footer'
import React from 'react'

const page = () => {
  return (
    <div className='py-50'>
      <Cabinet/>
       <FooterSection />
    </div>
  )
}

export default page