import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/logo.png'
import { Darker_Grotesque, Roboto } from 'next/font/google'
import NavbarContainer from './NavbarContainer'


const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});


const Navbar = () => {
  return (
    <div className='absolute top-[50px] w-full'>
      <NavbarContainer className='flex justify-between'>
        <Link href='#'>
          <Image src={Logo} alt={Logo} />
        </Link>
        <ul className="flex gap-x-2">
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Home</Link>
          </li>
        </ul>
        <div className="">
          <h3 className={` ${roboto.className}`}>+1 742 65 84 122</h3>
        </div>
      </NavbarContainer>
    </div>
  )
}

export default Navbar