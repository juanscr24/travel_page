import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const Navbar = () => {
    return (
        <nav className='flex justify-between relative z-30 py-5 md:px-10 px-5'>
            <Link href='/'>
                <Image src='/hilink-logo.svg' alt='' height={29} width={74} />
            </Link>
            <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className='text-gray-600 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold'>{link.label}</Link>
                ))}
            </ul>
            <div className='lg:flex justify-center items-center hidden'>
                <Button title='Log in' type='button' variant='btn_dark_green' icon='/user.svg' />
            </div>
            <Image alt='menu' src='menu.svg' width={32} height={32} className='inline-block cursor-pointer lg:hidden'/>
        </nav>
    )
}

export default Navbar