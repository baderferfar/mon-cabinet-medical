import Image from 'next/image';

const Logo = () => {
  return (
    <Image 
        alt='logo'
        height={130}
        width={130}
        src="/impe.svg"
    />
  )
}

export default Logo