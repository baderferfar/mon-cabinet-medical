
import { SoinList } from '@/components/soin-list'
import { data } from '@/data/soins/varicosites'


const Page = () => {
  
  return (
    <div className='flex flex-col  gap-5 py-24 px-5'>
      <div className='text-foreground  flex justify-center text-3xl font-extralight'>
        <p>Nos Soins Spécialisés</p>
      </div>
      <div>
        <SoinList items={data}/>
      </div>
      
    </div>
  )
}

export default Page