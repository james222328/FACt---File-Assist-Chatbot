import Image from 'next/image';
import logoImage from '../assets/images/logo.png';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container mx-auto px-4'>
        <div className='py-4 flex items-center justify-between'>
          <Link href='/'><Image src={logoImage} alt=''  className='h-12 w-12 relative bg-white' /></Link>
          <nav className='ml-auto flex gap-6'>
            <Link href='/about' className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</Link>
            <a href= '#features' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
            <a href='https://breezy-snails-divide.loca.lt' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Login</a>
          </nav>
        </div>
      </div>
    </div>
  );
};
