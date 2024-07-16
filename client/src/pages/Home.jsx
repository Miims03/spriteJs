import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {

    const navLink = [
        { title: 'Champ Select', path: '/champselect' },
        { title: 'Settings', path: '' },
    ]

    return (
        <div className='flex flex-col justify-start items-center'>
            <h1 className='text-white text-5xl font-semibold mt-5 mb-10'>Name of Game</h1>
            <div className='flex flex-col justify-start items-center gap-4'>
            {navLink.map((nav, i) => (
                <Link
                    className={`duration-500 text-2xl border-2 h-[3.5rem] w-[15rem] text-white flex items-center justify-center`}
                    to={nav.path}
                    key={i}>
                    {nav.title}
                </Link>
            ))}
            </div>
        </div>
    )
}
